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

  span {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    display: flex;
    color: ${({ theme }) => `${theme.secondary}`};
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => `${theme.primary}`};
    }
  }
`;

export default Select;
