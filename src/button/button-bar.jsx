import React from 'react';
import Button from './button';
import { Icon } from '../icon';

import { Main, FirstRow, SecondRow, ThirdRow } from './button-bar.styled';

const firstButtons = [1, 2, 3, 4, 5];
const secondButtons = [6, 7, 8, 9, null];
const iconButtons = ['edit'];

class ButtonBar extends React.Component {
  buildButton = value => {
    const { onClick, enabledButtons } = this.props;

    return (
      <Button
        key={value}
        onClick={onClick}
        value={value}
        enabled={enabledButtons.includes(value)}
      />
    );
  };

  buildIconButton = iconName => {
    const { onClick, enabledButtons } = this.props;

    return (
      <Button
        key={iconName}
        onClick={onClick}
        value={iconName}
        enabled={enabledButtons.includes(iconName)}
      >
        <Icon name={iconName} size="20" />
      </Button>
    );
  };

  render() {
    return (
      <Main>
        <FirstRow>{firstButtons.map(this.buildButton)}</FirstRow>
        <SecondRow>{secondButtons.map(this.buildButton)}</SecondRow>
        <ThirdRow>{iconButtons.map(this.buildIconButton)}</ThirdRow>
      </Main>
    );
  }
}
export default ButtonBar;
