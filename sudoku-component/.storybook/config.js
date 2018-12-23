import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web');
`;

function loadStories() {
  require('./stories.js');
}

configure(loadStories, module);
