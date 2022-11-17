const path = require('./paths.js');

result = {}

result.entry = {
  main: path.src + '/index.js',
  catalog: path.src + '/catalog.js',
}

result.pages = [
  { chunks: ['main'], page: 'index.html', template: path.src + '/pages/index.pug' },
  { chunks: ['catalog'], page: 'catalog.html', template: path.src + '/pages/catalog.pug' },
]

module.exports = result;
