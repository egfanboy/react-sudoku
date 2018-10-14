import styled, { keyframes } from 'styled-components';

const buttonSuccessAnimation = ({ theme }) => keyframes`
  0% {
    transform: rotate(0deg);
    background-color: transparent;
  }
  15% {
    transform: rotate(360deg);
  }
  20% {
    background-color: transparent;
    border-color: ${theme.primary}
  }
  30% {
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  50% {
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  70% {
    background-color: transparent;
    border-color: ${theme.primary}
  }
  100% {
    transform: rotate(360deg);
    background-color: transparent;
  }
`;

const buttonErrorAnimation = ({ theme }) => keyframes`
  0% {
    transform: rotate(0deg);
    background-color: transparent;
  }
  15% {
    transform: rotate(360deg);
  }
  20% {
    background-color: transparent;
    border-color: ${theme.primary}
  }
  30% {
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  50% {
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  70% {
    background-color: transparent;
    border-color: ${theme.primary}
  }
  100% {
    transform: rotate(360deg);
    background-color: transparent;
  }
`;

const iconAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0);
  }
  35% {
    transform: scale(1);
  }
`;

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
  * {
    pointer-events: none;
  }
  &.validation-success {
    animation: ${buttonSuccessAnimation} 1500ms linear;
    * {
      animation: ${iconAnimation} 1500ms linear;
    }
  }
  &.validation-error {
    animation: ${buttonErrorAnimation} 1500ms linear;
    * {
      animation: ${iconAnimation} 1500ms linear;
    }
  }
`;

export default StyledButton;
