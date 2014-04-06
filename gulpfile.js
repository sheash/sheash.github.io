var gulp = require('gulp');

var coffee = require('gulp-coffee');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  scripts: ['assets/coffee/*.coffee'],
    css: ['assets/scss/*.scss']
};

gulp.task('scss', function() {
  return gulp.src(paths.css)
    .pipe(sass({ style: 'expanded' }))
    .pipe(gulp.dest('stylesheets'))
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('javascripts/min'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.css, ['scss']);
});

gulp.task('default', ['scripts', 'scss', 'watch']);
