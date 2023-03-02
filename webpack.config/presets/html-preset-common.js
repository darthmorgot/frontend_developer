const htmlPreset = () => {
  return {
    test: /\.pug$/,
    // loader: '@webdiscus/pug-loader',
    loader: 'pug-loader',
  };
};

module.exports = htmlPreset;
