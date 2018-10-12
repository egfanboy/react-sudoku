import React from 'react';

import {
  Main,
  ConfirmButton,
  CancelButton,
  ButtonBox,
  Message,
} from './reset.styled';

export default class Reset extends React.Component {
  static defaultProps = { onClose: () => null, onAction: () => null };

  render() {
    const { onAction, onClose } = this.props;

    return (
      <Main>
        <Message>Would like to reset the game?</Message>
        <ButtonBox>
          <CancelButton onClick={onClose}>No</CancelButton>
          <ConfirmButton onClick={onAction}>Yes</ConfirmButton>
        </ButtonBox>
      </Main>
    );
  }
}
