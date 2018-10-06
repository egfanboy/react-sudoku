import React from 'react';
import Main from './sudoku-square.styled';
import ValueWrapper from './value-wrapper';

class SudokuSquare extends React.Component {
  state = {
    originalValue: null,
  };

  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    this.state.originalValue = initialValue;
  }

  componentDidMount() {
    const { setValue, answer, boardIndex, initialValue } = this.props;
    setValue(boardIndex, {
      value: initialValue,
      answer,
      isOriginal: this.isOriginal(),
    });
  }

  // eslint-disable-next-line react/destructuring-assignment
  isOriginal = () => this.state.originalValue !== null;

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
      theme,
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
            selectedRowIndex: rowIndex,
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
