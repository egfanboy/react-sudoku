import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => `${theme.background}`};

  width: 460px;
  overflow: hidden;
  color: ${({ theme }) => `${theme.inverted}`};
  z-index: 99;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => `${theme.background}`};
  width: 100%;
  height: 100%;
  position: absolute;
  margin: auto;
`;

export const Board = styled.div`
  display: flex;
  width: 500px;
`;
