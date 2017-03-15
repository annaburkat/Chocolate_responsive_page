var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps= require('gulp-sourcemaps');



gulp.task('pierz', function() {
  console.log("PIERZ");
});

gulp.task("pipe1", function() {
  return gulp.src('scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))

})

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
})
