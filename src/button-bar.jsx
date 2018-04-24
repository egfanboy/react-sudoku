import React from "react";
import styled from "styled-components";
import Button from "./button";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstRow = styled.div`
  display: flex;
`;
const SecondRow = styled.div`
  display: flex;
`;
const ThirdRow = styled.div``;

const firstButtons = [1, 2, 3, 4, 5];
const secondButtons = [6, 7, 8, 9, null];

// const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, null];
class ButtonBar extends React.Component {
  buildButton = value => {
    const { onClick, theme } = this.props;
    return <Button key={value} onClick={onClick} value={value} theme={theme} />;
  };
  render() {
    return (
      <Main>
        <FirstRow>{firstButtons.map(this.buildButton)}</FirstRow>
        <SecondRow>{secondButtons.map(this.buildButton)}</SecondRow>
      </Main>
    );
  }
}
export default ButtonBar;
