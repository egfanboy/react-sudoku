import styled from 'styled-components';

const StyledTimer = styled.div`
  font-size: smaller;
  color: ${({ theme }) => `${theme.primary}`};
  position: relative;
  align-self: center;
  font-family: 'Montserrat', sans-serif;
`;

export default StyledTimer;
