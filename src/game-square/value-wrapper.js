import React from 'react';
import { Main, Value } from './value-wrapper.styled';

const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
