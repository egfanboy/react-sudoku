import React, { Fragment } from 'react';

import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Sudoku from 't-sudoku-generator';

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };

  componentDidMount() {
    this.onDifficultyHandler(undefined, 'easy');
  }
  
  onDifficultyHandler = (e, difficulty) => {
    this.setState({ difficulty }, () => this.props.history.push(`/${difficulty}`));
  };

  render() {
    return (
      <Fragment>
        <select
          onChange={this.onDifficultyHandler}
          style={{ marginBottom: '10px' }}
          value={this.state.difficulty}
        >
          <option value="easy">{'easy'}</option>
          <option value="medium">{'medium'}</option>
          <option value="hard">{'hard'}</option>
        </select>
      </Fragment>
    );
  }
}

export default withRouter(Difficulty);
