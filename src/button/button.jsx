import React from 'react';

import { Icon } from '../icon';
import StyledButton from './button.styled';

export default ({ onClick, value, enabled, children }) => (
  <StyledButton onClick={() => onClick(value)} enabled={enabled}>
    {children || value || <Icon name="clear" size="20" />}
  </StyledButton>
);
