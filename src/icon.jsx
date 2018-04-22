import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  font-size: ${({ size }) => `${size}px`};
  transition: all 1s;
  color: ${({ theme }) => theme.secondary};
  padding: 0px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Icon = ({ className, size = "12", name, theme }) => {
  return (
    <StyledIcon
      className={`material-icons ${className}`}
      size={size}
      theme={theme}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
