import React from 'react';
import StyledIcon from './icon.styled';

const Icon = ({ className, size = '12', name, theme }) => (
  <StyledIcon
    className={`material-icons ${className}`}
    size={size}
    theme={theme}
  >
    {name}
  </StyledIcon>
);

export default Icon;
