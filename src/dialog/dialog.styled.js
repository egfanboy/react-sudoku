import styled from 'styled-components';

export const Main = styled.div`
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

export const StyledDialog = styled.div`
  height: 300px;
  width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0 0 1px 5px white;
  border-radius: 8px;
  color: white;
`;

export const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: inherit;
  border: solid 1px white;
  color: white;
  transition: all 1s;
  outline: none;
  &:hover {
    cursor: pointer;
    border: solid 1px #ff6200;
    color: #ff6200;
  }
`;

export const Title = styled.h2`
  user-select: none;
  margin-bottom: 50px;
`;

export const Message = styled.h4`
  user-select: none;
`;
