import React from 'react';

import { _events } from '../game/sudoku';

import { Container, StyledSelect } from './difficulty.styled';

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };

  onDifficultyHandler = difficulty => {
    this.setState({ difficulty }, () => {
      _events.emit('reset', this.state.difficulty);
    });
  };

  render() {
    const { difficulty } = this.state;

    return (
      <Container>
        <StyledSelect
          onChange={e => this.onDifficultyHandler(e.target.value)}
          value={difficulty}
        >
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </StyledSelect>
      </Container>
    );
  }
}

export default Difficulty;
