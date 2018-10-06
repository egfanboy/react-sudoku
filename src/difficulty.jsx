import React from 'react';
import styled from 'styled-components';

import { withRouter } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  margin: auto 0;
  z-index: 99;
  top: 0;
`;

const StyledSelect = styled.select`
  margin-bottom: 10px;
`;

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
  }

  render() {
    return (
      <Container>
        <StyledSelect
          onChange={e => this.onDifficultyHandler(e.target.value)}
          value={this.state.difficulty}
        >
          <option value="easy">{'easy'}</option>
          <option value="medium">{'medium'}</option>
          <option value="hard">{'hard'}</option>
        </StyledSelect>
      </Container>
    );
  }
}

export default withRouter(Difficulty);
