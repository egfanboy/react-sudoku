import React from "react";
import styled from "styled-components";
import Button from "./button";

const Main = styled.div`
  display: flex;
`;
const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class ButtonBar extends React.Component {
  buildButton = value => {
    const { onClick } = this.props;
    return <Button key={value} onClick={onClick} value={value} />;
  };
  render() {
    return <Main>{buttons.map(this.buildButton)}</Main>;
  }
}
export default ButtonBar;
