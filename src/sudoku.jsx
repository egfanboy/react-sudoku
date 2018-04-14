import React, { Fragment } from "react";
import Square from "./sudoku-square";
const buildRow = rowIndex => ({ value, answer }, i) => (
  <Square
    key={(rowIndex + 1) * i + 10}
    value={value === null ? "null" : value}
    rowIndex={rowIndex + 1}
    index={i + 1}
  />
);
const buildBoard = (x, i) => {
  return (
    <div
      key={i}
      style={{
        display: "flex",
        width: "500px"
      }}
    >
      {x.map(buildRow(i))}
    </div>
  );
};
class Sudoku extends React.Component {
  render() {
    const { board } = this.props;
    return <Fragment> {board.map(buildBoard)}</Fragment>;
  }
}
export default Sudoku;
