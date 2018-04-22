import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makepuzzle, solvepuzzle } from "sudoku";
import { List } from "immutable";
import Board from "./sudoku";
import { easy, medium, hard } from "t-sudoku-generator";

const x = makepuzzle();
const y = solvepuzzle(x);
let arr = [];

// const board = y.reduce((acc, j, i) => {
//   const formatValue = v => (v === null ? null : v + 1);
//   if (arr.length === 8) {
//     const y = [...arr, { answer: formatValue(j), value: formatValue(x[i]) }];
//     arr = [];
//     return acc.push(y);
//   } else {
//     arr = [...arr, { answer: formatValue(j), value: formatValue(x[i]) }];
//     return acc;
//   }
// }, new List());

// console.log(board.toJS());

const board = easy();

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          zoom: "1.25"
        }}
      >
        <Board board={board} />
      </div>
    );
  }
}

export default App;
