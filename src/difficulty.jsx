import React, { Fragment } from 'react';

import { withRouter } from 'react-router-dom';

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };

  componentDidMount() {
    this.onDifficultyHandler('easy');
  }

  onDifficultyHandler = difficulty => {
    if (this.props.location.pathname.split('/').pop() === difficulty) return;
    this.setState({ difficulty }, () =>
      this.props.history.push(`/${difficulty}`)
    );
  };

  render() {
    return (
      <Fragment>
        <select
          onChange={e => this.onDifficultyHandler(e.target.value)}
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
