/* ---------------------------
 * Dependancies
 */
var browserSync = require('browser-sync');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

/* ---------------------------
 * JS Helpers
 */
gulp.task('js-helpers', function() {
  return gulp.src([
    './public/js/helpers/helpers.js',
    './public/js/helpers/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('helpers.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js/'));
});

/* ---------------------------
 * Sass
 */
gulp.task('scss', function () {

    gulp.src([
        "public/css/scss/style.scss"
    ])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', swallowError)
    .pipe(gulp.dest("public/css/"))
    .pipe(sourcemaps.write())
    .pipe(browserSync.stream());

});

/* ---------------------------
 * Serve
 */
gulp.task('default', [], function () {

    // Serve
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./public/js/helpers/*.js', ['js-helpers']).on('change', browserSync.reload);
});