import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { easy, medium, hard } from 't-sudoku-generator';
import { Screen } from './splash-screen';

import StyledApp from './app.styled';
import { Board } from './game';

const Easy = () => <Board board={easy()} />;
const Medium = () => <Board board={medium()} />;
const Hard = () => <Board board={hard()} />;

class App extends Component {
  state = {
    username: sessionStorage.getItem('username') || null
  }

  changeScreen = name => {
    this.setState({ username: name });
  }

  render() {
    const { username } = this.state;
    return (
      <StyledApp>
        <BrowserRouter>
          { !username ? <Screen notify={name => this.changeScreen(name)} />
          : (
            <Fragment>
              <Route exact path="/easy" component={Easy} />
              <Route exact path="/medium" component={Medium} />
              <Route exact path="/hard" component={Hard} />
            </Fragment>
            )}
        </BrowserRouter>
      </StyledApp>
    );
  }
}

export default App;
