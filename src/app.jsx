import React, { Fragment } from 'react';

import StyledApp from './app.styled';
import { Difficulty } from './difficulty';
import { Board } from './game';

const App = () => (
  <StyledApp>
    <Fragment>
      <Difficulty />
      <Board />
    </Fragment>
  </StyledApp>
);

export default App;
