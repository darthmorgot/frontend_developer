const path = require('./paths.js');

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin.js');
const copyWebpackPlugin = require('./plugins/copy-webpack-plugin.js');

const htmlPreset = require('./presets/html-preset-common.js');
const scriptPreset = require('./presets/script-preset-common.js');
const stylePreset = require('./presets/style-preset-common.js');
const imagePreset = require('./presets/image-preset-common.js');
const fontPreset = require('./presets/font-preset-common.js');
const multipage = require('./webpack.multipage.js');

module.exports = {
  entry: {
    ...multipage.entry
  },
  output: {
    path: path.build,
    filename: '[name].js',
    publicPath: './',
    clean: true
  },
  plugins: [
    ...htmlWebpackPlugin,
    copyWebpackPlugin()
  ],
  module: {
    rules: [
      htmlPreset(),
      scriptPreset(),
      stylePreset(),
      imagePreset(),
      fontPreset()
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
