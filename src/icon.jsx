import React from "react";
import styled from "styled-components";

const StyledIcon = styled.i`
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
  padding: 0px;
`;

const Icon = ({ className, size = "12", name, color = "black" }) => {
  return (
    <StyledIcon
      className={`material-icons ${className}`}
      size={size}
      color={color}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
