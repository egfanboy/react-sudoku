import React from 'react';
import PropTypes from 'prop-types';

import { Main, Value } from './value-wrapper.styled';

const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

ValueWrapper.propTypes = {
  value: PropTypes.number,
};

export default ValueWrapper;
