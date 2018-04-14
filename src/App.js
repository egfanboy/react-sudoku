import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import { List } from "immutable";
import Board from "./sudoku";

const x = makepuzzle();
const y = solvepuzzle(x);
let arr = [];
let l = 0;
const board = y.reduce((acc, j, i) => {
  if (arr.length === 8) {
    const y = [...arr, { answer: j, value: x[i] }];
    arr = [];
    return acc.push(y);
  } else {
    arr = [...arr, { answer: j, value: x[i] }];
    return acc;
  }
}, new List());

// console.log(board.toJS());

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Board board={board} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
