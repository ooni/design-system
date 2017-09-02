import palx from 'palx'
import palette from './palette'

let colors = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  LIGHT_BLUE: '#5DB8FE',
  OONI_BLUE: '#0588CB',
  DARK_BLUE: '#005B9A',
  SUNFLOWER: '#F39C12',
  ALIZARIN: '#E74C3C',
  BLUE_GREY: '#37474F',
  BLUE_GREY_LIGHT: '#62727B',
  BLUE_GREY_DARK: '#102027'
}

/*
{ base: '#0588CB',
  black: '#374146',
  gray: '#acb4b9',
  gray[0-9]: '#f9f9fa',
  blue: '#0589cb',
  blue[0-9]: '#e4f2f9',
  indigo: '#0526cb',
  indigo[0-9]: '#e9ecfa',
  violet: '#4705cb',
  violet[0-9]: '#f0eafb',
  fuschia: '#aa05cb',
  fuschia[0-9]: '#f8eafb',
  pink: '#cb0589',
  pink[0-9]: '#fbeaf5',
  red: '#cb0526',
  red[0-9]: '#fbeaed',
  orange: '#cb4705',
  orange[0-9]: '#faece6',
  yellow: '#cbaa05',
  yellow[0-9]: '#f8f4df',
  lime: '#89cb05',
  lime[0-9]: '#f0f8e0',
  green: '#26cb05',
  green[0-9]: '#e7f9e4',
  teal: '#05cb47',
  teal[0-9]: '#e4f9eb',
  cyan: '#05cbaa',
  cyan[0-9]: '#e3f9f6',
}
*/

colors.palette = palette(colors.OONI_BLUE).flattened
export default colors
