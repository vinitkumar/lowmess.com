const breakpoints = ['48em', '64em']

// more colors at https://palx.jxnblk.com/f2930d.json
const colors = {
  orange: '#f2930d',
  oranges: [
    '#fdf2e1',
    '#fbe3c2',
    '#f9d49e',
    '#f7c276',
    '#f5ad47',
    '#f2930d',
    '#da840b',
    '#bf740a',
    '#9f6008',
    '#724506',
  ],

  black: '#443e35',
  white: '#ffffff',
  grays: [
    '#ffffff',
    '#f9f9f8',
    '#efedea',
    '#e3e0db',
    '#d6d2cb',
    '#c9c2ba',
    '#b9b1a6',
    '#a89e90',
    '#938776',
    '#756a5b',
    '#443e35',
    '#39342d',
    '#2a2722',
  ],
}

// Box-sizing & borders
const space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem']
const borders = [
  0,
  '0.125rem solid',
  '0.25rem solid',
  '0.5rem solid',
  '1rem solid',
  '2rem solid',
]
const radii = [0, '0.125rem', '0.25rem', '0.5rem', '1rem', '100%']

// Typography
const fontSizes = [
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2.25rem',
  '3rem',
  '5rem',
  '6rem',
]
const lineHeights = {
  title: 1.25,
  copy: 1.5,
}
const fontWeights = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  normal: '400',
  bold: '700',
}
const fonts = {
  'sans-serif':
    'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Oxygen, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  monospace:
    'Menlo, Consolas, Roboto Mono, Ubuntu Monospace, Oxygen Mono, Liberation Mono, monospace',
}

const theme = {
  breakpoints,
  space,
  fontSizes,
  borders,
  radii,
  fonts,
  lineHeights,
  fontWeights,
  colors,
}

module.exports = theme
