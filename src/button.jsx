import React from "react";
import styled from "styled-components";

import Icon from "./icon";

const StyledButton = styled.div`
  display: flex;
  transition: all 1s;
  align-items: center;
  font-family: "Source Code Pro", monospace;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  justify-content: center;
  height: 40px;
  width: 40px;
  color: white;
  border: 1px solid rgba(25, 25, 25, 1);
  border-radius: 50%;
  margin: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ff6200;
  }
`;

export default ({ onClick, value }) => (
  <StyledButton onClick={() => onClick(value)}>
    {value || <Icon name={"clear"} size="20" color="white" />}
  </StyledButton>
);
