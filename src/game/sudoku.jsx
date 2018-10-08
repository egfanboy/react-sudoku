import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { getTheme, ThemeSelector } from '../themes';
import Square from '../game-square/sudoku-square';
import ButtonBar from '../button/button-bar';
import { Dialog } from '../dialog';

import { Main, Background, Board } from './sudoku.styled';
import { Timer } from '../timer';

class Sudoku extends React.Component {
  state = {
    startDate: new Date(),
    selectedBoardIndex: null,
    values: {},
    board: null,
    done: false,
    selectedRowIndex: null,
    selectedIndex: null,
    openDialog: false,
    theme: getTheme(),
    notes: {},
    noteEnabled: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
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

  changeTheme = name => {
    this.setState({ theme: getTheme(name) });
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
    const { board, notes } = this.state;
    const { selectedBoardIndex, selectedIndex, selectedRowIndex } = this.state;

    const boardIndex = this.getBoardIndex(index + 1, rowIndex + 1);
    const value = this.getValue(boardIndex);

    return (
      <Square
        key={(rowIndex + 1) * index + 10}
        value={value}
        initialValue={initialValue}
        answer={answer}
        rowIndex={rowIndex + 1}
        boardIndex={boardIndex}
        index={index + 1}
        board={board}
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
    const { board } = this.props;
    const {
      openDialog,
      theme,
      startDate,
      noteEnabled,
      selectedBoardIndex,
      notes,
    } = this.state;

    const gameTimeInSeconds = Math.round(
      (Date.now() - startDate.getTime()) / 1000
    );

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Background />
          <Main>
            <ThemeSelector onChange={this.changeTheme} />
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
      </ThemeProvider>
    );
  }
}
export default Sudoku;
