import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { easy, medium, hard } from 't-sudoku-generator';
import { EventEmitter } from 'events';

import { ThemeSelector } from '../themes';
import Square from '../game-square/sudoku-square';
import ButtonBar from '../button/button-bar';

import { Main, Background, Board } from './sudoku.styled';
import { Timer } from '../timer';
import { Reset } from '../reset';

export const _events = new EventEmitter();

const BOARD_GETTERS = {
  easy,
  medium,
  hard,
};

const defaultState = {
  startDate: Date.now(),
  selectedBoardIndex: null,
  values: {},
  board: [],
  done: false,
  selectedRowIndex: null,
  selectedIndex: null,
  openDialog: false,
  notes: {},
  noteEnabled: false,
  history: [],
  moveCount: 0,
  showReset: false,
};

class Sudoku extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
    onComplete: PropTypes.func,
  };
  static defaultProps = { difficulty: 'easy', onComplete: () => null };

  state = { ...defaultState, difficulty: this.props.difficulty };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeypress);

    _events.on('reset', difficulty => {
      this.setState({
        ...defaultState,
        startDate: Date.now(),
        board: BOARD_GETTERS[difficulty](),
        difficulty,
      });
    });

    _events.emit('reset', this.props.difficulty);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeypress);
    _events.removeAllListeners('reset');
    _events.removeAllListeners('cycle-theme');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.difficulty !== this.props.difficulty)
      _events.emit('reset', this.props.difficulty);
  }

  onKeypress = e => {
    const charCode = typeof e.which === 'number' ? e.which : e.keyCode;

    const value = charCode - 48;
    if (value > 0 && value <= 9) this.handleButtonPress(value);

    // if keypress is the escape or delete key, delete the value set
    if (charCode === 27 || charCode === 8) this.handleButtonPress(null);

    if (charCode === 39) _events.emit('cycle-theme', 'next');
    if (charCode === 37) _events.emit('cycle-theme', 'prev');
  };

  setSelectedBoardIndexes = ({ ...indexes }) => this.setState({ ...indexes });

  setValue = (boardIndex, value) => {
    const { values, notes } = this.state;

    this.setState({
      values: Object.assign(values, {
        [`${boardIndex}`]: value,
      }),
    });
    this.setState({
      notes: {
        ...notes,
        [boardIndex]: [],
      },
    });
    this.isDone();
  };

  isDone = () => {
    const { values } = this.state;
    let done = true;

    if (Object.keys(values).length === 0) return;
    Object.keys(values).forEach(v => {
      if (values[v].value === '' || values[v].value === null) done = false;
    });

    if (done) {
      this.setState({ done }, () => this.validate());
    }
  };

  getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index);

  handleButtonPress = value => {
    const {
      selectedBoardIndex,
      values,
      notes,
      noteEnabled,
      history,
      moveCount,
    } = this.state;
    const selectedBoardIndexValue = values[selectedBoardIndex];

    const actionValues = ['edit', 'undo', 'reset'];

    if (value === 'undo') this.undoLastMove();
    if (value === 'reset') this.toggleReset();
    if (selectedBoardIndex === null) return;
    if (selectedBoardIndexValue.isOriginal) return;

    if (!noteEnabled && !actionValues.includes(value))
      this.setState({
        history: [{ boardIndex: selectedBoardIndex, value }, ...history],
        moveCount: moveCount + 1,
      });
    if (noteEnabled && !actionValues.includes(value)) {
      const existingNotes = value ? notes[selectedBoardIndex] || [] : [];
      this.setState({
        notes: {
          ...notes,
          [selectedBoardIndex]: existingNotes.includes(value)
            ? existingNotes.filter(note => note !== value)
            : [...existingNotes, value].filter(val => val).sort(),
        },
        values: Object.assign(values, {
          [`${selectedBoardIndex}`]: Object.assign(selectedBoardIndexValue, {
            value: null,
          }),
        }),
      });
    } else if (value === 'edit') {
      this.setState({
        noteEnabled: !noteEnabled,
      });
    } else if (!actionValues.includes(value)) {
      this.setValue(
        selectedBoardIndex,
        Object.assign(selectedBoardIndexValue, { value })
      );
    }
  };

  validate = () => {
    const { done, values, startDate } = this.state;
    const { onComplete } = this.props;

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });

    if (done && !errors) onComplete(Date.now() - startDate);
  };

  getValue = boardIndex => {
    const { values } = this.state;
    const valueForIndex = values[boardIndex];

    return valueForIndex && valueForIndex.value;
  };

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
    const { notes, difficulty } = this.state;
    const { selectedBoardIndex, selectedIndex, selectedRowIndex } = this.state;

    const boardIndex = this.getBoardIndex(index + 1, rowIndex + 1);
    const value = this.getValue(boardIndex);

    return (
      <Square
        key={`${difficulty}-${(rowIndex + 1) * index + 10}`}
        value={value}
        initialValue={initialValue}
        answer={answer}
        rowIndex={rowIndex + 1}
        boardIndex={boardIndex}
        index={index + 1}
        selectedIndex={selectedIndex}
        selectedRowIndex={selectedRowIndex}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndexes={this.setSelectedBoardIndexes}
        setValue={this.setValue}
        notes={notes[boardIndex] || []}
      />
    );
  };

  undoLastMove = () => {
    const { history } = this.state;
    if (!history.length) return;
    const moveToUndo = history.shift();

    const { value: newValue } =
      history.find(({ boardIndex }) => boardIndex === moveToUndo.boardIndex) ||
      {};

    this.setState(({ values, moveCount }) => {
      values[moveToUndo.boardIndex] = {
        ...values[moveToUndo.boardIndex],
        value: newValue || null,
      };
      moveCount++;

      return { values, moveCount };
    });
  };

  toggleReset = () => this.setState({ showReset: !this.state.showReset });

  resetBoard = () => {
    const { history, values, moveCount } = this.state;

    if (!history.length) return this.toggleReset();

    const indexesToNull = [
      ...new Set(history.map(({ boardIndex }) => boardIndex.toString())),
    ];

    const newValues = Object.keys(values).reduce((acc, key) => {
      if (indexesToNull.includes(key))
        acc[key] = { ...values[key], value: null };
      else acc[key] = values[key];

      return acc;
    }, {});

    this.setState(
      { values: newValues, moveCount: moveCount + 1, history: [] },
      () => this.toggleReset()
    );
  };

  buildBoard = (x, i) => <Board key={i}>{x.map(this.buildRow(i))}</Board>;

  render() {
    const {
      startDate,
      noteEnabled,
      selectedBoardIndex,
      notes,
      board,
      difficulty,
      showReset,
    } = this.state;

    const { changeTheme } = this.props;

    return (
      <Fragment>
        <Background />
        {showReset && (
          <Reset onAction={this.resetBoard} onCancel={this.toggleReset} />
        )}
        <Main>
          <ThemeSelector onChange={changeTheme} />
          <Timer startTime={startDate} difficulty={difficulty} />
          {board.map(this.buildBoard)}
        </Main>
        <ButtonBar
          onClick={this.handleButtonPress}
          enabledButtons={
            noteEnabled ? ['edit', ...(notes[selectedBoardIndex] || [])] : []
          }
        />
      </Fragment>
    );
  }
}
export default Sudoku;
