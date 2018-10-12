import styled from 'styled-components';

import { Button } from '../button';

export const Main = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: ${({ theme }) => `solid 1px ${theme.board}`};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background};
  z-index: 100;
`;

export const Message = styled.p`
  font-size: small;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.primary};
`;

export const ConfirmButton = styled(Button)`
  width: 90px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.primary};
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  background-color: transparent;
`;

export const CancelButton = styled(Button)`
  width: 90px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.inverted};
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;
