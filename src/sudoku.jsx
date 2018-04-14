import React, { Fragment } from "react";

import Square from "./sudoku-square";
import ButtonBar from "./button-bar";

class Sudoku extends React.Component {
  state = { selectedIndex: null, values: {}, done: false };

  setSelectedIndex = selectedIndex => this.setState({ selectedIndex });
  setValue = (boardIndex, value) => {
    this.setState(
      state =>
        (state.values = Object.assign(state.values, {
          [`${boardIndex}`]: value
        }))
    );

    this.validate();
  };

  isDone = () => {
    const { values } = this.state;
    this.setState({
      done: Object.values(values).every(({ value }) => value !== "")
    });
  };
  getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index);

  handleButtonPress = value => {
    const { selectedIndex, values } = this.state;
    const selectedIndexValue = values[selectedIndex];

    if (selectedIndexValue.isOriginal) return;

    if (selectedIndex === null) return;
    this.setValue(selectedIndex, Object.assign(selectedIndexValue, { value }));
  };

  validate = () => {
    const { values } = this.state;
    const { done } = this.state;
    console.log("validating");

    let errors = false;
    Object.values(values).forEach(({ value, answer }) => {
      if (value !== answer) errors = true;
    });
    !errors && done && alert("Errors");
  };

  getValue = boardIndex => {
    const { values } = this.state;
    const valueForIndex = values[boardIndex];
    return valueForIndex && valueForIndex["value"];
  };

  buildRow = rowIndex => ({ value: initialValue, answer }, index) => {
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
        setSelectedIndex={this.setSelectedIndex}
        selectedIndex={this.state.selectedIndex}
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
    // console.log(this.state.values);
    console.log(this.state.done);
    return (
      <Fragment>
        {board.map(this.buildBoard)}
        <ButtonBar onClick={this.handleButtonPress} />
        <button onClick={this.validate}>{"Validate"}</button>
      </Fragment>
    );
  }
}
export default Sudoku;
