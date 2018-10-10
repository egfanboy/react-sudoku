import React, { Fragment } from 'react';

import { easy, medium, hard } from 't-sudoku-generator';
import { EventEmitter } from 'events';

import { ThemeSelector } from '../themes';
import Square from '../game-square/sudoku-square';
import ButtonBar from '../button/button-bar';

import { Main, Background, Board } from './sudoku.styled';
import { Timer } from '../timer';

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
};

class Sudoku extends React.Component {
  state = { ...defaultState, difficulty: this.props.difficulty };

  static defaultProps = { difficulty: 'easy', onComplete: () => null };

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
    _events.removeAllListeners('cycle-them');
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
    const { selectedBoardIndex, values, notes, noteEnabled } = this.state;
    const selectedBoardIndexValue = values[selectedBoardIndex];

    if (selectedBoardIndex === null) return;
    if (selectedBoardIndexValue.isOriginal) return;

    if (noteEnabled && value !== 'edit') {
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
    } else {
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

  buildBoard = (x, i) => <Board key={i}>{x.map(this.buildRow(i))}</Board>;

  render() {
    const {
      startDate,
      noteEnabled,
      selectedBoardIndex,
      notes,
      board,
      difficulty,
    } = this.state;

    const { changeTheme } = this.props;

    return (
      <Fragment>
        <Background />
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
