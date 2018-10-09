import React from 'react';
import StyledTimer from './timer.styled';

class Timer extends React.Component {
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

  formatTime(time = 0) {
    let minutes = 0;
    let seconds = 0;
    minutes = parseInt(time / 60);
    seconds = parseInt(time % 60);
    return `${minutes}m${seconds}s`;
  }

  render() {
    return (
      <StyledTimer>
        Time Elapsed : {this.formatTime(this.state.timeElapsed)}
      </StyledTimer>
    );
  }
}

export default Timer;
