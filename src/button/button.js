import React from 'react';

import { MdClear } from 'react-icons/md';
import StyledButton from './button.styled';

export default ({ onClick, value, enabled, children }) => (
  <StyledButton onClick={() => onClick(value)} enabled={enabled}>
    {children || value || <MdClear size="0.75em" />}
  </StyledButton>
);
