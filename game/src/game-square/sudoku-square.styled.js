import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-right: ${({ isThickRight, isLastColumn, theme }) =>
    isThickRight
      ? `solid 4px ${theme.board}`
      : isLastColumn
        ? ''
        : `solid 1px ${theme.board}`};
  border-bottom: ${({ isThickBottom, isLastRow, theme }) =>
    isThickBottom
      ? `solid 4px ${theme.board}`
      : isLastRow
        ? ''
        : `solid 1px ${theme.board}`};

  &:hover {
    cursor: pointer;
  }
  &:after {
    content: '';
    position: absolute;
    width: 51px;
    height: 51px;
    left: 0;
    top: 0;
    background-color: ${({ isSelectedBoardIndex, isSelected, theme }) =>
      isSelectedBoardIndex ? '' : isSelected ? `${theme.overlay}` : ''};
  }
`;

export default Main;
