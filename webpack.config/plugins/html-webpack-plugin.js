const path = require('../paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const multipage = require('../webpack.multipage.js');

const htmlPluginResults = multipage.pages.map(page => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: page.template,
    filename: page.page,
    chunks: [...page.chunks]
  })
})

module.exports = htmlPluginResults;
