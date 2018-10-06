import React from 'react';

import {
  StyledDialog,
  StyledButton,
  Message,
  Title,
  Main,
} from './dialog.styled';

const renderDialog = props => {
  const {
    header,
    message,
    completionTimeMessage,
    isOpen,
    stateManager,
  } = props;

  return (
    <Main isOpen={isOpen}>
      {isOpen && (
        <StyledDialog>
          <Title>{header}</Title>
          <Message>{message}</Message>
          <Message>{completionTimeMessage}</Message>
          <StyledButton onClick={stateManager}>
            {'🔥 Wow I am awesome 🔥'}
          </StyledButton>
        </StyledDialog>
      )}
    </Main>
  );
};

class Dialog extends React.Component {
  render() {
    return renderDialog(this.props);
  }
}

export default Dialog;
