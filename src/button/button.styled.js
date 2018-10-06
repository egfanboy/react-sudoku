import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  transition: all 1s;
  align-items: center;
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${({ enabled, theme }) => enabled && theme.primary};
  color: ${({ theme }) => `1px solid ${theme.secondary}`};
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  border-radius: 10px;
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => `${theme.primary}`};
  }
`;

export default StyledButton;
