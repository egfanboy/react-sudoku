import React from 'react';

import { Container, FooterContent, Favorite } from './footer.styled';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <a href="https://github.com/EricTurf/react-sudoku">
          <i class="fab fa-github fa-2x" />
        </a>
        <FooterContent>
          Made with
          <Favorite>
            <i className="material-icons favorite">favorite</i>
          </Favorite>
          by
          <a href="https://github.com/EricTurf">EricTurf</a>
        </FooterContent>
      </Container>
    );
  }
}

export default Footer;
