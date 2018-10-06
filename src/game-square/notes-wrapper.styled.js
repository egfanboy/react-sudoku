import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  align-items: top left;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Value = styled.span`
  transition: all 0.5s;
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  font-size: 15px;
  color: ${({ isOriginal, theme }) =>
    isOriginal ? theme.primary : theme.secondary};
`;
