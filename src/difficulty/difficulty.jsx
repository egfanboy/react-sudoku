import React from 'react';
import { withRouter } from 'react-router-dom';

import { Container, StyledSelect } from './difficulty.styled';

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };

  componentDidMount() {
    this.onDifficultyHandler('easy');
  }

  onDifficultyHandler = difficulty => {
    const { location, history } = this.props;
    if (location.pathname.split('/').pop() === difficulty) return;
    this.setState({ difficulty }, () => history.push(`/${difficulty}`));
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

export default withRouter(Difficulty);
