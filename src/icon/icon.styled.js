import styled from 'styled-components';

const StyledIcon = styled.i`
  font-size: ${({ size }) => `${size}px`};
  transition: all 1s;
  color: ${({ theme }) => theme.secondary};
  padding: 0px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export default StyledIcon;
