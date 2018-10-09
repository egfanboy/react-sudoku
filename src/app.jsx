import React, { Fragment, Component } from 'react';
import { Button } from 'antd';
import { Screen } from './splash-screen';
import StyledApp from './app.styled';
import { Board } from './game';

class App extends Component {
  state = {
    username: sessionStorage.getItem('username') || null,
  };

  changeScreen = name => {
    this.setState({ username: name });
  };

  handleClick = () => {
    this.setState({ username: null }, () => sessionStorage.clear());
  };

  render() {
    const { username } = this.state;
    return (
      <StyledApp>
        {!username ? (
          <Screen notify={name => this.changeScreen(name)} />
        ) : (
          <Fragment>
            <Board />
            <Button size="large" onClick={() => this.handleClick()}>
              Change level
            </Button>
          </Fragment>
        )}
      </StyledApp>
    );
  }
}

export default App;
