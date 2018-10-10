import React from 'react';

import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import App from '../../src/app';

storiesOf('Button Bar', module).add('default', () => (
  <App difficulty="hard" onComplete={actions('done')} />
));
