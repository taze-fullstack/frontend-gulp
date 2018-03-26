var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('stylesheets/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '.'
    },
    cors: true,
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('stylesheets/base/*.scss', ['sass']);
    gulp.watch('stylesheets/components/*.scss', ['sass']);
    gulp.watch('stylesheets/layout/*.scss', ['sass']);
    gulp.watch('stylesheets/pages/*.scss', ['sass']);
    gulp.watch('stylesheets/themes/*.scss', ['sass']);
    gulp.watch('stylesheets/utils/*.scss', ['sass']);
    gulp.watch('stylesheets/vendors/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('javascripts/modules/*.js', browserSync.reload);
    // Other watchers
  });