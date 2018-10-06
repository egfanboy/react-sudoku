import styled from 'styled-components';

const Background = styled.div`
  background-color: ${({ theme }) => `${theme.background}`};
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: auto;
`;

export default Background;
