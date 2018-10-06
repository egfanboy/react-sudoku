import React from 'react';

import StyledButton from './button.styled';
import { Icon } from '../icon';

export default ({ onClick, value, theme }) => (
  <StyledButton theme={theme} onClick={() => onClick(value)}>
    {value || <Icon name="clear" size="20" theme={theme} />}
  </StyledButton>
);
