import styled from 'styled-components';

const StyledButton = styled.button`
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

export default StyledButton;
