import React, { Fragment } from 'react';

import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Sudoku from 't-sudoku-generator';

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };
  componentDidMount() {
    this.props.history.push('/easy');
  }

  onDifficultyHandler = e => {
    if (this.props.location.pathname.split('/').pop() === e.target.value) {
      return;
    }
    this.props.history.push(`/${e.target.value}`);
    this.setState({
      difficulty: e.target.value
    });
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
