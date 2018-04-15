import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import ValueWrapper from "./value-wrapper";

const Main = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-right:${({ isThickRight, isLastColumn }) =>
    isThickRight ? "solid 5px black" : isLastColumn ? "" : "solid 1px black"} ;
  border-bottom:${({ isThickBottom, isLastRow }) =>
    isThickBottom ? "solid 5px black" : isLastRow ? "" : "solid 1px black"} ;
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
      isSelected ? "rgba(255,0,0,0.3)" : ""};
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
        isLastColumn={index === 9 ? 1 : 0}
        isLastRow={rowIndex === 9 ? 1 : 0}
        isThickRight={index === 3 || index === 6 ? 1 : 0}
        isThickBottom={rowIndex === 3 || rowIndex === 6 ? 1 : 0}
        onClick={() =>
          setSelectedBoardIndexes({
            selectedBoardIndex: boardIndex,
            selectedIndex: index,
            selectedRowIndex: rowIndex
          })
        }
      >
        <ValueWrapper
          isOriginal={this.isOriginal() ? 1 : 0}
          isHighlighted={this.isHighlighted() ? 1 : 0}
          isSelectedBoardIndex={selectedBoardIndex === boardIndex ? 1 : 0}
          value={initialValue || value}
        />
      </Main>
    );
  }
}

export default SudokuSquare;
