var gulp = require('gulp');

var coffee = require('gulp-coffee');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  scripts: ['assets/coffee/*.coffee'],
    css: ['assets/scss/*.scss']
};

gulp.task('scss', function() {
  return gulp.src(paths.css)
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('stylesheets'))
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(coffee({bare: true}))
    // .pipe(uglify())
    .pipe(gulp.dest('javascripts/'));
});

gulp.task('images', function() {
  return gulp.src('imgs/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.css, ['scss']);
});

gulp.task('default', ['scripts', 'scss', 'watch', 'images']);
