import React from 'react';

import StyledDialog from './dialog.styled';
import StyledButton from './button.styled';
import Message from './message.styled';
import Title from './title.styled';
import Main from './main.styled';

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
