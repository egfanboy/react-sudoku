import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

export const FirstRow = styled.div`
  color: ${({ theme }) => `${theme.inverted}`};
  display: flex;
`;

export const SecondRow = styled.div`
  color: ${({ theme }) => `${theme.inverted}`};
  display: flex;
`;

export const ThirdRow = styled.div`
  color: ${({ theme }) => `${theme.inverted}`};
  display: flex;
  justify-content: space-around;
`;
