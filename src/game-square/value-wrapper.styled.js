import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Value = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ isOriginal, theme, hasError }) =>
    isOriginal ? theme.original : hasError ? 'red' : theme.primary};
  justify-content: center;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 25px;
  align-items: center;
`;
