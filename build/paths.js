var appRoot = 'src/';
var testRoot = 'test/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  testRoot: testRoot,
  source: appRoot + '**/*.js',
  translation: appRoot + 'locales/**/*.json',
  test: testRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.scss',
  output: outputRoot,
  exportSrv: exportSrvRoot
};
