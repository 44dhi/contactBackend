

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#009688',
  '#ff5722',
  '#607d8b',
]

const generateColor = () => {
  const maxLimit = colors.length;
  const randomNumber = Math.floor(Math.random() * maxLimit);
  return colors[randomNumber];
}

module.exports = generateColor