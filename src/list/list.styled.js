import styled from 'styled-components';

export const Main = styled.div`
  overflow-y: scroll;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 225px;
  width: 100%;
  min-height: 35px;
  font-size: small;
  border-bottom: ${({ theme }) => `1px solid ${theme.inverted}`};
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.inverted};
  background-color: ${({ selected, highlighted, theme }) =>
    highlighted ? theme.overlay : selected ? theme.board : theme.background};
  &:hover {
    cursor: pointer;
  }
`;
