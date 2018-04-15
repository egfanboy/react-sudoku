import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const OriginalStyle = css`
  font-weight: bold;
  font-size: 20px;
  color: blue;
  box-shadow: inset 0 0 0 25px #53a7ea;
`;

const Main = styled.div`
  display: flex;
  position: relative;
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
  background-color: ${({ isGrey }) => (isGrey ? "rgba(125,125,125,0.3)" : "")};
  ${({ isOriginal, isSelected }) => (isOriginal ? OriginalStyle : null)};
  background-color: ${({ isSelected, isOriginal }) =>
    isSelected ? "rgba(0,0,0,0.2)" : ""};

  width: 50px;
  height: 50px;
  border-left: solid 1px black;
  border-bottom: ${({ isLastRow }) => (isLastRow ? "" : " solid 1px black")};

  &:hover {
    cursor: pointer;
  }
  &:after {
    content: "";
    position:absolute;
    width:100%;
    height:100%
    left:0;
    top:0;
    background-color: ${({ isSelected, isOriginal }) =>
      isSelected ? "rgba(0,0,0,0.4)" : ""};
  }
`;

class SudokuSquare extends React.Component {
  state = { value: this.props.value, originalValue: this.props.initialValue };

  componentDidMount() {
    const {
      setValue,
      rowIndex,
      index,
      answer,
      boardIndex,
      initialValue
    } = this.props;
    setValue(boardIndex, {
      value: initialValue,
      answer,
      isOriginal: this.isOriginal()
    });
  }

  isOriginal = () => this.state.originalValue !== "";
  isHighlighted = () => {
    const { selectedIndex, rowIndex, selectedRowIndex, index } = this.props;
    return selectedIndex === index || rowIndex === selectedRowIndex;
  };
  isGreySquare = () => {
    const { index, rowIndex } = this.props;
    const greyIndexes = [1, 2, 3, 7, 8, 9];
    const rowIndexExceptions = [4, 5, 6];

    if (rowIndexExceptions.includes(rowIndex) && !greyIndexes.includes(index))
      return true;

    return greyIndexes.includes(index) && greyIndexes.includes(rowIndex);
  };
  render() {
    const {
      value,
      rowIndex,
      boardIndex,
      index,
      selectedBoardIndex,
      setSelectedBoardIndexes,
      initialValue
    } = this.props;

    return (
      <Main
        isSelected={this.isHighlighted() ? 1 : 0}
        isOriginal={this.isOriginal() ? 1 : 0}
        isLastRow={rowIndex === 9 ? 1 : 0}
        isGrey={this.isGreySquare() ? 1 : 0}
        onClick={() =>
          setSelectedBoardIndexes({
            selectedBoardIndex: boardIndex,
            selectedIndex: index,
            selectedRowIndex: rowIndex
          })
        }
      >
        {initialValue || value}
      </Main>
    );
  }
}

export default SudokuSquare;
