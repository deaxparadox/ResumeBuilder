const path = require('path');

module.exports = {
  entry: './js/resume/resume.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './js/dist/'),
  },
};