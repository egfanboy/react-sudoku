import styled from 'styled-components';

const Main = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  position: absolute;
  align-items: center;
  pointer-events: ${({ isOpen }) => (isOpen ? '' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

export default Main;
