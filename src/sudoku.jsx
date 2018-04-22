import React, { Fragment } from "react";

import Square from "./sudoku-square";
import ButtonBar from "./button-bar";
import Dialog from "./dialog";

class Sudoku extends React.Component {
  state = {
    selectedBoardIndex: null,
    values: {},
    done: false,
    valid: false,
    selectedRowIndex: null,
    selectedIndex: null,
    openDialog: false
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
      if (values[v]["value"] === "" || values[v]["value"] === null)
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

    if (selectedBoardIndex === null) return;
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
    return valueForIndex && valueForIndex["value"];
  };

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
    const { selectedBoardIndex, selectedIndex, selectedRowIndex } = this.state;

    const boardIndex = this.getBoardIndex(index + 1, rowIndex + 1);
    const value = this.getValue(boardIndex);

    return (
      <Square
        key={(rowIndex + 1) * index + 10}
        value={value === null ? "" : value}
        initialValue={initialValue === null ? "" : initialValue}
        answer={answer}
        rowIndex={rowIndex + 1}
        boardIndex={boardIndex}
        index={index + 1}
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
          display: "flex",
          width: "500px"
        }}
      >
        {x.map(this.buildRow(i))}
      </div>
    );
  };
  render() {
    const { board } = this.props;
    const { openDialog } = this.state;

    return (
      <Fragment>
        {board.map(this.buildBoard)}
        <ButtonBar onClick={this.handleButtonPress} />
        <Dialog
          isOpen={openDialog}
          stateManager={this.setDialogState}
          header="Congratz"
          message="You did it 👏"
        />
      </Fragment>
    );
  }
}
export default Sudoku;
