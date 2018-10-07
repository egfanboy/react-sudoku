import styled from 'styled-components';

const StyledTimer = styled.div`
  font-size: smaller;
  z-index: 100;
  color: ${({ theme }) => theme.secondary};
  position: relative;
  bottom: 80px;
  left: 225px;
`;

export default StyledTimer;
