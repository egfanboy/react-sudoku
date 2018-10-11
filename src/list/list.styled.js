import styled from 'styled-components';

export const Main = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 225px;
  width: 100%;
  min-height: 35px;
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.inverted};
  background-color: ${({ selected, highlighted, theme }) =>
    highlighted ? theme.overlay : selected ? theme.board : theme.background};
  &:hover {
    cursor: pointer;
  }
`;
