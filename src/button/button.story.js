import React from 'react';

import { storiesOf } from '@storybook/react';

import ButtonBar from './button-bar';

storiesOf('Button Bar', module).add('default', () => (
  <ButtonBar enabledButtons={[]} />
));
