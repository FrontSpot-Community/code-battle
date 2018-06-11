const path = require('path');

module.exports = {
  assetsDir: path.join(__dirname, '/src/assets'),
  title: 'Code-Battle Web Components List',
  ignore: ['**/*.test.js', '**/*index.js'],
  sections: [{name: 'Web Components', components: 'src/components/**/*.js'}],
  skipComponentsWithoutExample: true,
  webpackConfig: require('./webpack.config.js'),
  getExampleFilename: (componentpath) =>
    componentpath.replace(/\.js$/, '.doc.md')
};
