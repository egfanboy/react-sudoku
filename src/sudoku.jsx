import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getTheme, ThemeSelector } from './themes';
import Square from './sudoku-square';
import ButtonBar from './button-bar';
import Dialog from './dialog';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => `${theme.background}`};
  border-radius: 10px;
  width: 460px;
  overflow: hidden;
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.primary}`};
  zoom: 1.25;
  z-index: 99;
`;

const Background = styled.div`
  background-color: ${({ theme }) => `${theme.background}`};
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: auto;
`;

const Board = styled.div`
  display: flex;
  width: 500px;
`;

class Sudoku extends React.Component {
  state = {
    board: null,
    selectedBoardIndex: null,
    values: {},
    done: false,
    valid: false,
    selectedRowIndex: null,
    selectedIndex: null,
    openDialog: false,
    theme: getTheme()
  }

  changeTheme = name => {
    this.setState({ theme: getTheme(name) })
  }

  setSelectedBoardIndexes = ({ ...indexes }) => this.setState({ ...indexes })

  setValue = (boardIndex, value) => {
    this.setState(
      state =>
        (state.values = Object.assign(state.values, {
          [`${boardIndex}`]: value
        }))
    );
    this.isDone();
  }

  setDialogState = () => {
    this.setState({ openDialog: !this.state.openDialog });
  }

  isDone = () => {
    const { values } = this.state;
    let done = true;

    if (Object.keys(values).length === 0) return;
    Object.keys(values).forEach(v => {
      if (values[v]['value'] === '' || values[v]['value'] === null)
        done = false;
    });

    if (done) {
      this.setState({ done }, () => this.validate());
    }
  }

  getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index)

  handleButtonPress = value => {
    const { selectedBoardIndex, values } = this.state;
    const selectedBoardIndexValue = values[selectedBoardIndex];

    if (selectedBoardIndex === null) return;
    if (selectedBoardIndexValue.isOriginal) return;

    this.setValue(
      selectedBoardIndex,
      Object.assign(selectedBoardIndexValue, { value })
    );
  }

  validate = () => {
    const { values } = this.state;
    const { done } = this.state;

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });

    if (done && !errors) this.setDialogState();
  }

  getValue = boardIndex => {
    const { values } = this.state;
    const valueForIndex = values[boardIndex];
    return valueForIndex && valueForIndex['value'];
  }

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
    const {
      selectedBoardIndex,
      selectedIndex,
      selectedRowIndex,
      board
    } = this.state;

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
      />
    );
  }

  buildBoard = (x, i) => {
    return <Board key={i}>{x.map(this.buildRow(i))}</Board>;
  }

  render() {
    const { board } = this.props;
    const { openDialog } = this.state;

    return (
      <ThemeProvider theme={this.state.theme}>
        <Fragment>
          <Background />
          <Main>
            <ThemeSelector onChange={this.changeTheme}/>
            {board.map(this.buildBoard)}
            <Dialog
              isOpen={openDialog}
              stateManager={this.setDialogState}
              header="Congratz"
              message="You did it 👏"
            />
          </Main>
          <ButtonBar onClick={this.handleButtonPress} />
        </Fragment>
      </ThemeProvider>
    );
  }
}
export default Sudoku;
