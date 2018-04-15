import React from "react";
import styled, { css } from "styled-components";
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Value = styled.div`
  width: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "50px" : isOriginal ? "40px" : "50px"};
  height: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "50px" : isOriginal ? "40px" : "50px"};
  transition: all 0.5s;
  display: flex;
  margin-top: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "0px" : isOriginal ? "5px" : "0px"};
  justify-content: center;
  font-size: 20px;
  align-items: center;
  font-weight: bold;
  border: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "none" : isOriginal ? "solid 1px rgba(0,0,0,0.5)" : "none"};
  box-shadow: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "" : isOriginal ? "0px 0px 5px 2px red" : ""};

  background-color: ${({ isOriginal, isSelectedBoardIndex }) =>
    isOriginal ? "red" : isSelectedBoardIndex ? "rgba(255,0,0,0.75)" : ""};
  border-radius: ${({ isOriginal, isHighlighted }) =>
    isOriginal && !isHighlighted ? "50%" : ""};
`;
const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
