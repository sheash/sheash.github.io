var gulp = require('gulp');

var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  scripts: ['assets/coffee/*.coffee'],
    css: ['assets/scss/*.scss']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(coffee({bare: true}))
    // .pipe(uglify())
    .pipe(gulp.dest('javascripts/'));
});

// gulp.task('images', function() {
//   return gulp.src('imgs/**/*')
//     .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
//     .pipe(gulp.dest('images'))
//     .pipe(notify({ message: 'Images task complete' }));
// });

gulp.task('watch', function() {
  gulp.watch(paths.css, ['scss']);
});

gulp.task('default', [ 'watch']);
