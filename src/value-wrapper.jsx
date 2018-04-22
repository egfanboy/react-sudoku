import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Value = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ isOriginal, isSelectedBoardIndex, theme }) =>
    isOriginal ? theme.primary : theme.secondary};
  justify-content: center;
  font-family: "Source Code Pro", monospace;
  font-weight: bold;
  font-size: 25px;
  align-items: center;
`;
const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
