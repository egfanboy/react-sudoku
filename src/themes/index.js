import React from 'react';
import styled from 'styled-components';
import themes from './themes.js';

const Select = styled.select`
  color: ${({ theme }) => `${theme.primary}`};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => `${theme.primary}`};
`;

export const getTheme = (themename) => themes[themename] || themes['lightOrange']

export class ThemeSelector extends React.Component {
  state = {
    value: 'lightOrange'
  }
  handleChange = ({ target: { value } }) => {
    this.props.onChange(value);
    this.setState({value});
  }
  render() {
    return (
      <Select value={this.state.value} onChange={this.handleChange}>
        {
          Object.keys(themes).map(theme => (
            <option value={theme}>{themes[theme].name}</option>
          ))
        }
      </Select>
    )
  }
}

