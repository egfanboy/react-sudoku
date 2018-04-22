import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { makepuzzle, solvepuzzle } from "sudoku";
import { List } from "immutable";
import Board from "./sudoku";
import { easy, medium, hard } from "t-sudoku-generator";
import styled from "styled-components";
const board = easy();

const Main = styled.div`
  display: flex;
  background-color: white;
`;
class App extends Component {
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
        <Board board={board} />
      </div>
    );
  }
}

export default App;
