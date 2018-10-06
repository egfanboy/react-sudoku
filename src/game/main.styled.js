import styled from 'styled-components';

const Main = styled.div`
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

export default Main;
