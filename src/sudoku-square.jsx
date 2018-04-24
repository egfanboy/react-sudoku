import React from "react";
import styled from "styled-components";
import ValueWrapper from "./value-wrapper";

const Main = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-right: ${({ isThickRight, isLastColumn, theme }) =>
    isThickRight
      ? `solid 2px ${theme.board}`
      : isLastColumn
        ? ""
        : `solid 1px ${theme.board}`};
  border-bottom: ${({ isThickBottom, isLastRow, theme }) =>
    isThickBottom
      ? `solid 2px ${theme.board}`
      : isLastRow
        ? ""
        : `solid 1px ${theme.board}`};
  &:hover {
    cursor: pointer;
  }
  &:after {
   content: "";
    position: absolute;
    width: 51px;
    height: 51px;
    left: 0;
    top: 0;
    
    background-color: ${({ isSelectedBoardIndex, isSelected, theme }) =>
      isSelectedBoardIndex ? "" : isSelected ? `${theme.overlay}` : ""};
  }
  }
`;

class SudokuSquare extends React.Component {
  state = {
    value: this.props.value,
    originalValue: this.props.initialValue
  };

  componentDidMount() {
    const { setValue, answer, boardIndex, initialValue } = this.props;
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

  render() {
    const {
      value,
      rowIndex,
      boardIndex,
      index,
      selectedBoardIndex,
      setSelectedBoardIndexes,
      initialValue,
      theme
    } = this.props;

    return (
      <Main
        isSelected={this.isHighlighted() ? 1 : 0}
        isLastColumn={index === 9 ? 1 : 0}
        isLastRow={rowIndex === 9 ? 1 : 0}
        isThickRight={index === 3 || index === 6 ? 1 : 0}
        isThickBottom={rowIndex === 3 || rowIndex === 6 ? 1 : 0}
        isSelectedBoardIndex={selectedBoardIndex === boardIndex ? 1 : 0}
        theme={theme}
        onClick={() =>
          setSelectedBoardIndexes({
            selectedBoardIndex: boardIndex,
            selectedIndex: index,
            selectedRowIndex: rowIndex
          })
        }
      >
        <ValueWrapper
          theme={theme}
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
