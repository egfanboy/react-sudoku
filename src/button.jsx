import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 20px;
`;

export default ({ onClick, value }) => (
  <StyledButton onClick={() => onClick(value)}>{value}</StyledButton>
);
