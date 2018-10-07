import styled from 'styled-components';

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => `${theme.background}`};
  border-radius: 10px;
  width: 460px;
  overflow: hidden;
  color: ${({ theme }) => `${theme.numberColor}`}
  box-shadow: ${({ theme }) => `0 0 10px 2px ${theme.primary}`};
  zoom: 1.25;
  z-index: 99;
`;

export const Background = styled.div`
  background-color: ${({ theme }) => `${theme.background}`};
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: auto;
`;

export const Board = styled.div`
  display: flex;
  width: 500px;
`;
