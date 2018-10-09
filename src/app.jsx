import React, { Fragment, Component } from 'react';
import { Button } from 'antd';
import { ThemeProvider } from 'styled-components';
import { Screen } from './splash-screen';
import StyledApp from './app.styled';
import { Board } from './game';
import { getTheme } from './themes';

class App extends Component {
  state = {
    username: sessionStorage.getItem('username') || null,
    theme: getTheme(),
  };

  changeScreen = name => {
    this.setState({ username: name });
  };

  handleClick = () => {
    this.setState({ username: null }, () => sessionStorage.clear());
  };

  handleChangeTheme = name => {
    this.setState({ theme: getTheme(name) });
  };

  render() {
    const { username, theme } = this.state;
    return (
      <StyledApp>
        {!username ? (
          <Screen notify={name => this.changeScreen(name)} />
        ) : (
          <ThemeProvider theme={theme}>
            <StyledApp>
              <Fragment>
                <Board changeTheme={this.handleChangeTheme} />
                <Button size="large" onClick={() => this.handleClick()}>
                  Change level
                </Button>
              </Fragment>
            </StyledApp>
          </ThemeProvider>
        )}
      </StyledApp>
    );
  }
}

export default App;
