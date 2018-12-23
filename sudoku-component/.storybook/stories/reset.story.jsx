import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ThemeWrapper from '../theme-wrapper';
import { Reset } from '../../src/reset';

storiesOf('Reset', module).add('default', () => (
  <ThemeWrapper>
    <Reset onAction={() => null} onClose={() => null} />
  </ThemeWrapper>
));
