import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import App from '../../src/app';

class Game extends React.Component {
  state = {
    difficulty: 'easy',
  };

  render() {
    return (
      <div>
        <App difficulty={this.state.difficulty} onComplete={actions('done')} />
        <button onClick={() => this.setState({ difficulty: 'easy' })}>
          Easy
        </button>
        <button onClick={() => this.setState({ difficulty: 'medium' })}>
          Medium
        </button>
        <button onClick={() => this.setState({ difficulty: 'hard' })}>
          Hard
        </button>
      </div>
    );
  }
}

storiesOf('Button Bar', module).add('default', () => <Game />);
