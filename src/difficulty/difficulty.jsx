import React from 'react';
import { Select } from 'antd';
import { _events } from '../game/sudoku';

const { Option } = Select;

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
      <React.Fragment>
        <Select
          defaultValue="Easy"
          style={{ width: 120 }}
          onChange={value => this.onDifficultyHandler(value)}
          value={difficulty}
        >
          <Option value="easy">Easy</Option>
          <Option value="medium">Medium</Option>
          <Option value="hard">Hard</Option>
        </Select>
      </React.Fragment>
    );
  }
}

export default Difficulty;
