import React, { Component, Fragment } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Difficulty from './difficulty';
import { easy, medium, hard } from 't-sudoku-generator';

import Board from './sudoku';

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
      <div
        style={{
          display: 'flex',
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%'
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
