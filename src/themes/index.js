import React from 'react';
import styled from 'styled-components';
import themes from './themes';

const Select = styled.select`
  color: ${({ theme }) => `${theme.primary}`};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => `${theme.primary}`};
`;

export const getTheme = themename => themes[themename] || themes.lightOrange;

export class ThemeSelector extends React.Component {
  state = {
    value: 'lightOrange',
  };

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props;

    onChange(value);

    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Select value={value} onChange={this.handleChange}>
        {Object.keys(themes).map(theme => (
          <option value={theme}>{themes[theme].name}</option>
        ))}
      </Select>
    );
  }
}
