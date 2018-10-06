import React, { Component, Fragment } from 'react';
import styled from "styled-components";
import { BrowserRouter, Route } from 'react-router-dom';
import Difficulty from './difficulty';
import { easy, medium, hard } from 't-sudoku-generator';

import Board from './sudoku';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Easy = () => {
  return <Board board={easy()} />;
};
const Medium = () => {
  return <Board board={medium()} />;
};
const Hard = () => {
  return <Board board={hard()} />;
};
class App extends Component {  
  render() {
    return (
      <StyledApp>
        <BrowserRouter>
          <Fragment>
            <Difficulty />
            <Route exact path="/easy" component={Easy} />
            <Route exact path="/medium" component={Medium} />
            <Route exact path="/hard" component={Hard} />
          </Fragment>
        </BrowserRouter>
      </StyledApp>
    );
  }
}

export default App;
