import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-left: solid 1px black;
  border-bottom: ${({ isLastRow }) => (isLastRow ? "" : " solid 1px black")};
`;

const getBoardIndex = (index, rowIndex) => rowIndex * 9 - (9 - index);

class SudokuSquare extends React.Component {
  state = { value: this.props.value };
  render() {
    const { value, rowIndex, index } = this.props;
    console.log(getBoardIndex(index, rowIndex));

    return <Main isLastRow={rowIndex === 9 ? 1 : 0}>{value}</Main>;
  }
}

export default SudokuSquare;
