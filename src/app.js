import React, { Fragment, Component } from 'react';

import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
 @import url('https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web');
`;

import StyledApp from './app.styled';
import { Board } from './game';

class App extends Component {
  state = {
    theme: {
      name: 'Light Orange',
      primary: 'rgba(255,90,0,1)',
      secondary: 'rgba(0,0,0,1)',
      board: 'rgba(255,90,0,0.7)',
      overlay: 'rgba(255,90,0,0.2)',
      background: 'white',
      original: 'rgba(102, 102, 102,1)',
      inverted: 'black',
    },
  };

  render() {
    const { theme } = this.state;
    const { onComplete, difficulty } = this.props;
    return (
      <StyledApp>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <Board onComplete={onComplete} difficulty={difficulty} />
          </StyledApp>
        </ThemeProvider>
      </StyledApp>
    );
  }
}

export default App;
