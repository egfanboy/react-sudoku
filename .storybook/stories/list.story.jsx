import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ThemeWrapper from '../theme-wrapper';
import { List } from '../../src/list';

storiesOf('List', module).add('default', () => (
  <ThemeWrapper>
    <List
      onChange={action('Item(s) selected')}
      items={[
        { boardIndex: 70, value: 5 },
        { boardIndex: 14, value: 4 },
        { boardIndex: 19, value: 9 },
        { boardIndex: 19, value: null },
        { boardIndex: 19, value: 4 },
        { boardIndex: 38, value: 3 },
        { boardIndex: 74, value: 8 },
        { boardIndex: 76, value: 1 },
        { boardIndex: 59, value: 3 },
      ]}
    />
  </ThemeWrapper>
));
