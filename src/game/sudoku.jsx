import React, { Fragment } from 'react';

import { easy, medium, hard } from 't-sudoku-generator';
import { EventEmitter } from 'events';

import { ThemeSelector } from '../themes';
import Square from '../game-square/sudoku-square';
import ButtonBar from '../button/button-bar';
import { Dialog } from '../dialog';

import { Main, Background, Board } from './sudoku.styled';
import { Timer } from '../timer';

export const _events = new EventEmitter();

_events.setMaxListeners(100);

const BOARD_GETTERS = {
  easy,
  medium,
  hard,
};

const defaultState = {
  startDate: new Date(),
  selectedBoardIndex: null,
  values: {},
  board: [],
  done: false,
  selectedRowIndex: null,
  selectedIndex: null,
  openDialog: false,
  notes: {},
  noteEnabled: false,
  difficulty: 'easy',
};

class Sudoku extends React.Component {
  state = defaultState;

  componentDidMount() {
    document.addEventListener('keyup', this.onKeypress);

    _events.on('reset', difficulty => {
      this.setState({
        ...defaultState,
        startDate: new Date(),
        board: BOARD_GETTERS[difficulty](),
        difficulty,
      });
    });

    _events.emit('reset', 'easy');
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
    _events.removeAllListeners('reset');
  }

  onKeypress = e => {
    const charCode = typeof e.which === 'number' ? e.which : e.keyCode;
    const value = charCode - 48;
    if (value >= 0 && value <= 9) {
      this.handleButtonPress(value || null);
    } else if (charCode === 27) {
      // if keypress is the escape key, delete the value set
      this.handleButtonPress(null);
    }
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

  setDialogState = () => {
    const { openDialog } = this.state;
    this.setState({ openDialog: !openDialog });
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

    if (noteEnabled && value !== '✎') {
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
    } else if (value === '✎') {
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
    const { values } = this.state;
    const { done } = this.state;

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });

    if (done && !errors) this.setDialogState();
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
      openDialog,
      startDate,
      noteEnabled,
      selectedBoardIndex,
      notes,
      board,
    } = this.state;

    const { changeTheme } = this.props;

    const gameTimeInSeconds = Math.round(
      (Date.now() - startDate.getTime()) / 1000
    );

    return (
      <Fragment>
        <Background />
        <Main>
          <ThemeSelector onChange={changeTheme} />
          {board.map(this.buildBoard)}
          <Dialog
            isOpen={openDialog}
            stateManager={this.setDialogState}
            header="Congratz"
            message="You did it 👏"
            completionTimeMessage={`It took you ${gameTimeInSeconds} seconds!`}
          />
        </Main>
        <ButtonBar
          onClick={this.handleButtonPress}
          enabledButtons={
            noteEnabled ? ['✎', ...(notes[selectedBoardIndex] || [])] : []
          }
        />
        <Timer startTime={startDate.getTime()} />
      </Fragment>
    );
  }
}
export default Sudoku;
