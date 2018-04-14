import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  transition: all 0.5s;
  justify-content: center;
  align-items: center;
  background-color: ${({ isGrey }) => (isGrey ? "grey" : "")};
  background-color: ${({ isOriginal }) => (isOriginal ? "orange" : "")};
  background-color: ${({ isSelected, isOriginal }) =>
    isSelected ? "red" : ""};
  width: 50px;
  height: 50px;
  border-left: solid 1px black;
  border-bottom: ${({ isLastRow }) => (isLastRow ? "" : " solid 1px black")};
  &:hover {
    cursor: pointer;
  }
`;

// const getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index);

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
      selectedIndex,
      setSelectedIndex,
      initialValue
    } = this.props;
    boardIndex === 3 && console.log(value);
    return (
      <Main
        isSelected={selectedIndex === boardIndex ? 1 : 0}
        isOriginal={this.isOriginal() ? 1 : 0}
        isLastRow={rowIndex === 9 ? 1 : 0}
        isGrey={this.isGreySquare() ? 1 : 0}
        onClick={() => !this.isOriginal() && setSelectedIndex(boardIndex)}
      >
        {initialValue || value}
      </Main>
    );
  }
}

export default SudokuSquare;
