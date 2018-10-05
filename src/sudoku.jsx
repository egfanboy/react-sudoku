import React, { Fragment } from 'react';
import styled from 'styled-components';

import Square from './sudoku-square';
import ButtonBar from './button-bar';
import Dialog from './dialog';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  width: 460px;
  overflow: hidden;
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.primary}`};
  zoom: 1.25;
`;

const Board = styled.div`
  display: flex;
  width: 500px;
`;

const orangeTheme = {
  primary: 'rgba(255,90,0,1)',
  secondary: 'rgba(0,0,0,1)',
  board: 'rgba(255,90,0,0.7)',
  overlay: 'rgba(255,90,0,0.2)',
};

class Sudoku extends React.Component {
  state = {
    startDate: new Date(),
    board: null,
    selectedBoardIndex: null,
    values: {},
    done: false,
    selectedRowIndex: null,
    selectedIndex: null,
    openDialog: false,
    theme: orangeTheme,
  };

  componentDidMount() {
    document.addEventListener('keypress', this.onKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeypress);
  }

  onKeypress = e => {
    const charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
    const value = charCode - 48;
    if (value >= 0 && value <= 9) {
      this.handleButtonPress(value || null);
    }
  }

  setSelectedBoardIndexes = ({ ...indexes }) => this.setState({ ...indexes });

  setValue = (boardIndex, value) => {
    const { values } = this.state;
    this.setState({
      values: Object.assign(values, {
        [`${boardIndex}`]: value,
      }),
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
    const { selectedBoardIndex, values } = this.state;
    const selectedBoardIndexValue = values[selectedBoardIndex];

    if (selectedBoardIndex === null) return;
    if (selectedBoardIndexValue.isOriginal) return;

    this.setValue(
      selectedBoardIndex,
      Object.assign(selectedBoardIndexValue, { value }),
    );
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
    const {
      selectedBoardIndex,
      selectedIndex,
      selectedRowIndex,
      theme,
      board,
    } = this.state;

    const boardIndex = this.getBoardIndex(index + 1, rowIndex + 1);
    const value = this.getValue(boardIndex);

    return (
      <Square
        theme={theme}
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
      />
    );
  };

  buildBoard = (x, i) => <Board key={i}>{x.map(this.buildRow(i))}</Board>;

  render() {
    const { board } = this.props;
    const { openDialog, theme, startDate } = this.state;
    const gameTimeInSeconds = Math.round(
      (Date.now() - startDate.getTime()) / 1000
    );

    return (
      <Fragment>
        <Main theme={theme}>
          {board.map(this.buildBoard)}
          <Dialog
            theme={theme}
            isOpen={openDialog}
            stateManager={this.setDialogState}
            header="Congratz"
            message="You did it 👏"
            completionTimeMessage={`It took you ${gameTimeInSeconds} seconds!`}
          />
        </Main>
        <ButtonBar theme={theme} onClick={this.handleButtonPress} />
      </Fragment>
    );
  }
}
export default Sudoku;
