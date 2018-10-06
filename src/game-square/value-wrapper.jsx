import React from 'react';
import Value from './value.styled';
import Main from './value-wrapper.styled';

const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
