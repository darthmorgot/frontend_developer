const PugPlugin = require('pug-plugin');

const htmlPreset = () => {
  return {
    test: /\.pug$/,
    loader: PugPlugin.loader,
  };
};

module.exports = htmlPreset;
