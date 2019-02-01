import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import App from '../../src/app';

class Game extends React.Component {
  state = {
    difficulty: 'easy',
    hide: false,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ difficulty: 'easy' })}>
          Easy
        </button>
        <button onClick={() => this.setState({ difficulty: 'medium' })}>
          Medium
        </button>
        <button onClick={() => this.setState({ difficulty: 'hard' })}>
          Hard
        </button>
        <button onClick={() => this.setState({ hide: !this.state.hide })}>
          {this.state.hide ? 'Reveal' : 'Hide'}
        </button>
        <App
          difficulty={this.state.difficulty}
          onComplete={action('done')}
          hide={this.state.hide}
        />
      </div>
    );
  }
}

storiesOf('Game', module).add('default', () => <Game />);
