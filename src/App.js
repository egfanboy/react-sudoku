import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makepuzzle, solvepuzzle } from "sudoku";
import { List } from "immutable";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Difficulty from "./difficulty";
import Sudoku from "t-sudoku-generator";
import styled from "styled-components";
import Board from "./sudoku";

// const board = easy();
const Easy = () => {
  return <Board board={Sudoku.easy()} />;
};
const Medium = () => {
  return <Board board={Sudoku.medium()} />;
};
const Hard = () => {
  return <Board board={Sudoku.hard()} />;
};
class App extends Component {
  state = { difficulty: "easy", board: Sudoku.easy() };

  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          zoom: "1.25"
        }}
      >
        <BrowserRouter>
          <Fragment>
            <Difficulty />
            <Route exact path="/easy" component={Easy} />
            <Route exact path="/medium" component={Medium} />
            <Route exact path="/hard" component={Hard} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
