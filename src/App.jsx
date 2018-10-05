import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { easy, medium, hard } from 't-sudoku-generator';
import Difficulty from './difficulty';

import Board from './sudoku';

const StyledApp = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Easy = () => (<Board board={easy()} />);
const Medium = () => (<Board board={medium()} />);
const Hard = () => (<Board board={hard()} />);

const App = () => (
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

export default App;
