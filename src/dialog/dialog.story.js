import React from 'react';

import { storiesOf } from '@storybook/react';

import Dialog from './dialog';

storiesOf('Dialog', module).add('simple dialog', () => (
  <Dialog
    message="Hi, this is a message"
    completionTimeMessage="Finished in 10 minutes!"
    isOpen
  />
));
