import React from 'react';
import PropTypes from 'prop-types';

import StyledTimer from './timer.styled';

class Timer extends React.Component {
  static propTypes = {
    startTime: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  };

  state = {
    timeElapsed: 0,
  };

  componentDidMount() {
    setInterval(this.getTimeElapsed, 1000);
  }

  getTimeElapsed = () => {
    this.setState({
      timeElapsed: parseInt((Date.now() - this.props.startTime) / 1000),
    });
  };

  formatTime = (time = 0) => {
    const { difficulty } = this.props;
    let minutes = 0;
    let seconds = 0;

    const upperCaseDifficulty = difficulty.replace(
      /[a-z]/,
      difficulty.charAt(0).toUpperCase()
    );

    minutes = parseInt(time / 60);
    seconds = parseInt(time % 60);
    return `${upperCaseDifficulty}: ${minutes}M ${seconds}S`;
  };

  render() {
    return <StyledTimer>{this.formatTime(this.state.timeElapsed)}</StyledTimer>;
  }
}

export default Timer;
