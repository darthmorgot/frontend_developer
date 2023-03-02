const pathapp = require('path');

const path = require('./paths.js');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: 'chrome',
    historyApiFallback: true,
    static: {
      directory: pathapp.resolve(__dirname, '../dist'),
    },
    // contentBase: path.build,
    compress: true,
    hot: true
  },
  cache: true,
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
