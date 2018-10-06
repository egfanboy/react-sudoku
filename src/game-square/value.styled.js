import styled from 'styled-components';

const Value = styled.div`
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ isOriginal, theme }) =>
    isOriginal ? theme.primary : theme.secondary};
  justify-content: center;
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  font-size: 25px;
  align-items: center;
`;

export default Value;
