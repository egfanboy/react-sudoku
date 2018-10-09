import styled from 'styled-components';

const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  align-self: center;
  height: 40px;
  color: ${({ theme }) => `${theme.primary}`};

  button {
    display: flex;
    height: 100%;
    color: #fff;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    i:hover {
      color: ${({ theme }) => `${theme.primary}`};
    }
  }
`;

export default Select;
