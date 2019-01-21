import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${theme => theme.background};
`;

export default StyledApp;
