import React from 'react';
import PropTypes from 'prop-types';

import { MdEdit, MdUndo, MdReplay, MdDone } from 'react-icons/md';

import Button from './button';
import { Main, FirstRow, SecondRow, ThirdRow } from './button-bar.styled';

const firstButtons = [1, 2, 3, 4, 5];
const secondButtons = [6, 7, 8, 9, null];
const iconButtons = ['reset', 'undo', 'validate', 'notes'];

const ICONS = {
  notes: MdEdit,
  undo: MdUndo,
  reset: MdReplay,
  validate: MdDone,
};

class ButtonBar extends React.Component {
  static propTypes = {
    enabledButtons: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

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
    const Icon = ICONS[iconName];
    return (
      <Button
        title={iconName}
        key={iconName}
        onClick={onClick}
        value={iconName}
        enabled={enabledButtons.includes(iconName)}
      >
        <Icon title={iconName} size="0.75em" />
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
