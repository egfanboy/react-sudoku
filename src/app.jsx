import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import StyledApp from './app.styled';
import { Difficulty } from './difficulty';
import { Board } from './game';
import { getTheme } from './themes';

class App extends React.Component {
  state = {
    theme: getTheme(),
  };

  handleChangeTheme = name => {
    this.setState({ theme: getTheme(name) });
  };

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Fragment>
            <Difficulty />
            <Board changeTheme={this.handleChangeTheme} />
          </Fragment>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
