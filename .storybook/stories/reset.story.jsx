import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Reset } from '../../src/reset';

storiesOf('Reset', module).add('default', () => (
  <Reset onAction={() => null} onClose={() => null} />
));
