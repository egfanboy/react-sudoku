import React from 'react';

import { ThemeProvider } from 'styled-components';

import { ThemeSelector, getTheme } from '../src/themes';

export default class ThemeWrapper extends React.Component {
  state = { theme: getTheme() };

  themeChange = themeName => {
    this.setState({ theme: getTheme(themeName) });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: this.state.theme.background,
          }}
        >
          <ThemeSelector onChange={this.themeChange} />
          {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}
