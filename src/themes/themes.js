const baseLightTheme = {
  background: 'white',
  original: 'rgba(102, 102, 102,1)',
  inverted: 'black',
};

const baseDarkTheme = {
  background: 'black',
  original: 'rgba(194, 192, 190,1)',
  inverted: 'white',
};

const darkThemes = {
  darkOrange: {
    name: 'Dark Orange',
    primary: 'rgba(255,90,0,1)',
    secondary: 'rgba(255,255,255,1)',
    board: 'rgba(255,90,0,0.7)',
    overlay: 'rgba(255,90,0,0.2)',
    ...baseDarkTheme,
  },
  darkGreen: {
    name: 'Dark Green',
    primary: 'rgba(0,255,70,1)',
    secondary: 'rgba(255,255,255,1)',
    board: 'rgba(0,255,70,0.7)',
    overlay: 'rgba(0,255,70,0.2)',
    ...baseDarkTheme,
  },
  darkBlue: {
    name: 'Dark Blue',
    primary: 'rgba(0,90,255,1)',
    secondary: 'rgba(255,255,255,1)',
    board: 'rgba(0,90,255,0.7)',
    overlay: 'rgba(0,90,255,0.2)',
    ...baseDarkTheme,
  },
};

const lightThemes = {
  lightOrange: {
    name: 'Light Orange',
    primary: 'rgba(255,90,0,1)',
    secondary: 'rgba(0,0,0,1)',
    board: 'rgba(255,90,0,0.7)',
    overlay: 'rgba(255,90,0,0.2)',
    ...baseLightTheme,
  },
  lightGreen: {
    name: 'Light Green',
    primary: 'rgba(23,115,69,1)',
    secondary: 'rgba(0,0,0,1)',
    board: 'rgba(23,115,69,0.7)',
    overlay: 'rgba(23,115,69,0.2)',
    ...baseLightTheme,
  },
  lightBlue: {
    name: 'Light Blue',
    primary: 'rgba(0,90,255,1)',
    secondary: 'rgba(0,0,0,1)',
    board: 'rgba(0,90,255,0.7)',
    overlay: 'rgba(0,90,255,0.2)',
    ...baseLightTheme,
  },
};

export default { ...lightThemes, ...darkThemes };
