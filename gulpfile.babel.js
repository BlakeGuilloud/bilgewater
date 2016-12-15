const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const ghPages       = require('gulp-gh-pages');
const gulp          = require('gulp');
const gutil         = require('gutil');
const less          = require('gulp-less');
const postcss       = require('gulp-postcss');
const serve         = require('gulp-serve');
const webpack       = require('webpack');

const paths         = require('./paths');
const webpackConfig = require('./webpack.config');

gulp.task('pages', () => gulp.src('./public/**/*').pipe(ghPages()));

gulp.task('serve', ['scripts', 'styles', 'watch'], serve({
  port: 3000,
  root: ['public'],
}));

gulp.task('watch', () => {
  gulp.watch(paths.scripts.main, ['scripts']);
  gulp.watch(paths.styles.main, ['styles']);
});

gulp.task('scripts', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('scripts', err);

    gutil.log('scripts', stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));

    callback();
  });
});

gulp.task('styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }),
    cssnano(),
  ];

  return gulp.src(paths.styles.app)
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'));
});
