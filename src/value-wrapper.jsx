import React from "react";
import styled, { css } from "styled-components";
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Value = styled.div`
  width: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "40px" : isOriginal ? "40px" : "40px"};
  height: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "40px" : isOriginal ? "40px" : "40px"};
  transition: all 0.5s;
  display: flex;
  margin-top: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "5px" : isOriginal ? "5px" : "5px"};
  justify-content: center;
  font-size: 20px;
  align-items: center;
  font-weight: bold;

  background-color: ${({ isOriginal, isSelectedBoardIndex }) =>
    isOriginal
      ? "rgb(25,25,25)"
      : isSelectedBoardIndex
        ? "rgba(25,25,25,0.75)"
        : ""};

  border-radius: ${({ isOriginal, isHighlighted }) =>
    isOriginal && !isHighlighted ? "50%" : "50%"};
`;
const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
