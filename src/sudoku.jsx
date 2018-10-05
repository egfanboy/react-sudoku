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
`;

const orangeTheme = {
  primary: 'rgba(255,90,0,1)',
  secondary: 'rgba(0,0,0,1)',
  board: 'rgba(255,90,0,0.7)',
  overlay: 'rgba(255,90,0,0.2)'
};

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
    theme: orangeTheme
  };

  setSelectedBoardIndexes = ({ ...indexes }) => this.setState({ ...indexes });
  setValue = (boardIndex, value) => {
    this.setState(
      state =>
        (state.values = Object.assign(state.values, {
          [`${boardIndex}`]: value
        }))
    );
    this.isDone();
  };

  setDialogState = () => {
    this.setState({ openDialog: !this.state.openDialog });
  };
  isDone = () => {
    const { values } = this.state;
    let done = true;

    if (Object.keys(values).length === 0) return;
    Object.keys(values).forEach(v => {
      console.log(values[v]);
      if (values[v]['value'] === '' || values[v]['value'] === null)
        done = false;
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
      Object.assign(selectedBoardIndexValue, { value })
    );
  };

  validate = () => {
    const { values } = this.state;
    const { done } = this.state;

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });

    done && console.log(errors);

    if (done && !errors) this.setDialogState();
  };

  getValue = boardIndex => {
    const { values } = this.state;
    const valueForIndex = values[boardIndex];
    return valueForIndex && valueForIndex['value'];
  };

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
    const {
      selectedBoardIndex,
      selectedIndex,
      selectedRowIndex,
      theme,
      board
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
  buildBoard = (x, i) => {
    return (
      <div
        key={i}
        style={{
          display: 'flex',
          width: '500px'
        }}
      >
        {x.map(this.buildRow(i))}
      </div>
    );
  };
  render() {
    const { board } = this.props;
    const { openDialog, theme } = this.state;

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
          />
        </Main>
        <ButtonBar theme={theme} onClick={this.handleButtonPress} />
      </Fragment>
    );
  }
}
export default Sudoku;
