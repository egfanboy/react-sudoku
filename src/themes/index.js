import React from 'react';
import PropTypes from 'prop-types';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import themes from './themes';
import Select from './index.styled';
import { _events } from '../game/sudoku';

export const getTheme = themeName => themes[themeName] || themes.lightOrange;

const themesArr = Object.keys(themes);

export class ThemeSelector extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  state = {
    value: 'lightOrange',
    name: themes.lightOrange.name,
    appThemes: themesArr,
  };

  componentDidMount() {
    _events.on('cycle-theme', action => {
      action && this.handleClick(action);
    });
  }

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
    const { name } = this.state;

    return (
      <Select>
        <button type="button" onClick={() => this.handleClick('prev')}>
          <MdChevronLeft size="2em" />
        </button>
        <span>{name}</span>
        <button type="button" onClick={() => this.handleClick('next')}>
          <MdChevronRight size="2em" />
        </button>
      </Select>
    );
  }
}
