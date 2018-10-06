import styled from 'styled-components';

const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => `${theme.secondary}`};
  background: ${({ theme }) => `${theme.primary}`};

  span {
    color: ${({ theme }) => `${theme.secondary}`};
  }

  button {
    display: flex;
    height: 100%;
    color: #fff;
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    i:hover {
      color: ${({ theme }) => `${theme.secondary}`};
    }
  }
`;

export default Select;
