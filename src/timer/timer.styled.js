import styled from 'styled-components';

const StyledTimer = styled.div`
  font-size: smaller;
  color: ${({ theme }) => `${theme.primary}`};
  position: relative;
  align-self: center;
`;

export default StyledTimer;
