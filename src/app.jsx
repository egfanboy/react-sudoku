import React, { Fragment, Component } from 'react';

import { ThemeProvider } from 'styled-components';

import StyledApp from './app.styled';
import { Board } from './game';
import { getTheme } from './themes';

class App extends Component {
  state = {
    theme: getTheme(),
  };

  handleChangeTheme = name => {
    this.setState({ theme: getTheme(name) });
  };

  render() {
    const { theme } = this.state;
    const { onComplete, difficulty } = this.props;
    return (
      <StyledApp>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <Fragment>
              <Board
                changeTheme={this.handleChangeTheme}
                onComplete={onComplete}
                difficulty={difficulty}
              />
            </Fragment>
          </StyledApp>
        </ThemeProvider>
      </StyledApp>
    );
  }
}

export default App;
