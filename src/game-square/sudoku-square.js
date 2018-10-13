import React from 'react';
import PropTypes from 'prop-types';

import Main from './sudoku-square.styled';
import ValueWrapper from './value-wrapper';
import NotesWrapper from './notes-wrapper';

class SudokuSquare extends React.Component {
  static propTypes = {
    setSelectedBoardIndexes: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired,
    value: PropTypes.number,
    initialValue: PropTypes.number,
    answer: PropTypes.number,
    rowIndex: PropTypes.number,
    boardIndex: PropTypes.number,
    index: PropTypes.number,
    selectedIndex: PropTypes.number,
    selectedRowIndex: PropTypes.number,
    selectedBoardIndex: PropTypes.number,
  };

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
      notes,
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
        {notes.length ? (
          <NotesWrapper values={notes} />
        ) : (
          <ValueWrapper
            theme={theme}
            isOriginal={this.isOriginal() ? 1 : 0}
            isHighlighted={this.isHighlighted() ? 1 : 0}
            isSelectedBoardIndex={selectedBoardIndex === boardIndex ? 1 : 0}
            value={initialValue || value}
            smaller={notes.length > 0}
          />
        )}
      </Main>
    );
  }
}

export default SudokuSquare;
