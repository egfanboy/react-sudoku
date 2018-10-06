import React from 'react';
import styled from 'styled-components';
import themes from './themes';
import { Icon } from '../icon';

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

export const getTheme = themeName => themes[themeName] || themes.lightOrange;

const themesArr = Object.keys(themes);

export class ThemeSelector extends React.Component {
  state = {
    value: 'lightOrange',
    name: themes.lightOrange.name,
    appThemes: themesArr,
  };

  handleClick = payload => {
    const { onChange } = this.props;
    const { value, appThemes } = this.state;
    const { length } = appThemes; // length of the themes array
    const i = appThemes.findIndex(el => el === value); // current index
    let nextTheme;

    if (payload === 'next') {
      nextTheme = i !== length - 1 ? appThemes[i + 1] : appThemes[0];
    } else if (payload === 'prev') {
      nextTheme = i > 0 ? appThemes[i - 1] : appThemes[length - 1];
    }

    onChange(nextTheme);

    this.setState({
      value: nextTheme,
      name: themes[nextTheme].name,
    });
  };

  render() {
    const { name, value } = this.state;

    return (
      <Select>
        <button type="button" onClick={() => this.handleClick('prev')}>
          <Icon name="chevron_left" size="24" />
        </button>
        <span>{name}</span>
        <button type="button" onClick={() => this.handleClick('next')}>
          <Icon name="chevron_right" size="24" theme={themes[value]} />
        </button>
      </Select>
    );
  }
}
