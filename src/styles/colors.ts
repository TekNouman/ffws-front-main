import { colorTransparent } from 'styles/templates';

export const colors = {
  white: '#fff',
  whiteHover: '#ececec',
  black: '#000',
  blackPanel: '#151613',
  blackPanelDisable: '#171815',
  blackContent: '#1C1D1A',
  checkboxBorderActive: '#707475',
  background: '#050505',
  purple: '#402EAE',
  purpleDark: '#27197C',
  purpleDarkHover: '#1d135d',
  error: '#F42D51',
  red: '#CC0049',
  lightBlue: '#06BFBF',
  pink: '#E03CD2',
  gray: '#CBCBCB',
  grayPanel: '#555B5F',
  lightGray: '#232323',
  lightGraySecond: '#252622',
  lightRed: '#E55578',
  green: '#63DB05',
  headerPink: '#C90792',
  headerBlue: '#0B39B4',
  headerRed: '#BD002D',
  headerBrown: '#A5003C',
  headerPureDarkPurple: '#18068B',
  disabledBlue: '#30208C',
  disabledBlueContent: '#4532B9',
  lightBlueSecond: '#8D9C9D',
  headersGreen: '#23A485',
  darkRed: '#9D0025',
  darkPurple: '#291A7F',

  whiteTransparent: (opacity: number) =>
    colorTransparent([255, 255, 255], opacity),
  blackTransparent: (opacity: number) =>
    colorTransparent([21, 22, 19], opacity),
  redTransparent: (opacity: number) => colorTransparent([244, 45, 81], opacity),
};

export const transparency = {
  transparent: 0,
  blur: 0.1,
  hoverSecond: 0.15,
  checkbox: 0.2,
  hover: 0.25,
  overlay: 0.4,
  half: 0.5,
  border: 0.66,
  fill: 1,
};
