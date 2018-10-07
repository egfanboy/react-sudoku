import React from 'react';

import { storiesOf } from '@storybook/react';

import backgrounds from '../../.storybook/backgrounds';
import Dialog from './dialog';

storiesOf('Dialog', module)
  .addDecorator(backgrounds)
  .add('simple dialog', () => (
    <Dialog
      message="Hi, this is a message"
      completionTimeMessage="Finished in 10 minutes!"
      isOpen
    />
  ));
