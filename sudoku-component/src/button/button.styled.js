import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  transition: all 0.3s;
  align-items: center;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 25px;
  user-select: none;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: ${({ enabled, theme }) => enabled && theme.primary};
  color: ${({ theme }) => `1px solid ${theme.secondary}`};
  border: ${({ theme }) => `2px solid ${theme.primary}`};
  border-radius: 50%;
  margin: 5px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => `${theme.primary}`};
    i {
      color: ${({ theme }) => `${theme.primary}`};
    }
  }
`;

export default StyledButton;
