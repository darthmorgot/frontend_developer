const path = require('../paths.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const copyWebpackPlugin = () => {
  return new CopyWebpackPlugin({
    patterns: [
      {
        from: path.src + '/static',
        to: ''
      }
    ]
  });
};

module.exports = copyWebpackPlugin;
