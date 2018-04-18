import React from "react";
import styled from "styled-components";

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
  color: ${({ isOriginal, isSelectedBoardIndex }) =>
    isOriginal && isSelectedBoardIndex
      ? "white"
      : isSelectedBoardIndex ? "#ff6200" : isOriginal ? "#ff6200" : "white"};
  margin-top: ${({ isOriginal, isHighlighted }) =>
    isHighlighted ? "5px" : isOriginal ? "5px" : "5px"};
  justify-content: center;

  font-family: "Source Code Pro", monospace;
  font-weight: bold;
  font-size: 25px;
  align-items: center;

  background-color: ${({ isOriginal, isSelectedBoardIndex }) =>
    isSelectedBoardIndex && isOriginal
      ? "rgb(22,22,22)"
      : isSelectedBoardIndex
        ? "rgba(25,25,25,0.9)"
        : isOriginal ? "rgb(25,25,25)" : ""};

  border-radius: ${({ isOriginal, isHighlighted }) =>
    isOriginal && !isHighlighted ? "50%" : "50%"};
`;
const ValueWrapper = ({ value, ...styleProps }) => (
  <Main>
    <Value {...styleProps}>{value}</Value>
  </Main>
);

export default ValueWrapper;
