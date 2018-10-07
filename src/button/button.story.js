import React from 'react';

import { storiesOf } from '@storybook/react';

import backgrounds from '../../.storybook/backgrounds';
import ButtonBar from './button-bar';

storiesOf('Button Bar', module)
  .addDecorator(backgrounds)
  .add('default', () => <ButtonBar enabledButtons={[]} />);
