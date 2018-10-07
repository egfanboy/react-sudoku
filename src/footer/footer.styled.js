import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 0;
  margin: auto 0;
  display: block;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    color: rgba(255, 90, 0, 1);
    margin-right: 5px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Favorite = styled.div`
  margin: 5px;
  .favorite {
    color: rgba(255, 90, 0, 1);
  }
`;
