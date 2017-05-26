var gulp = require('gulp');
var gulpIf = require('gulp-if');
var paths = require('../paths');
var eslint = require('gulp-eslint');

// runs eslint on all .js files
gulp.task('lint', ['lint-source', 'lint-test']);

gulp.task('lint-source', function() {
  return gulp.src(paths.source)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest(paths.root)))
    .pipe(eslint.failAfterError());
});

gulp.task('lint-test', function() {
  return gulp.src(paths.test)
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest(paths.testRoot)))
    .pipe(eslint.failAfterError());
});

function isFixed(file) {
  // Has ESLint fixed the file contents?
  return file.eslint != null && file.eslint.fixed;
}
