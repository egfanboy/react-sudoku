import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => `${theme.background}`};

  width: 460px;
  overflow: hidden;
  color: ${({ theme }) => `${theme.inverted}`};
`;

export const Board = styled.div`
  display: flex;
`;
