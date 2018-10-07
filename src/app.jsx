import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { easy, medium, hard } from 't-sudoku-generator';

import StyledApp from './app.styled';
import { Difficulty } from './difficulty';
import { Board } from './game';
import Footer from './footer/footer';

const Easy = () => <Board board={easy()} />;
const Medium = () => <Board board={medium()} />;
const Hard = () => <Board board={hard()} />;

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
    <Footer />
  </StyledApp>
);

export default App;
