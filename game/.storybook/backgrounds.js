/* eslint import/no-extraneous-dependencies: 0 */

import backgrounds from '@storybook/addon-backgrounds';

export default backgrounds([
  { name: 'default', value: '#f1f3f9', default: true },
  { name: 'gray', value: '#e5e5e5', default: true },
  { name: 'white', value: '#fff' },
  { name: 'black', value: '#000' },
]);
