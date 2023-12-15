const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// Компіляція SASS в CSS
gulp.task('sass', function () {
  return gulp.src('Zadereiko_Frontend_Pro/hw24/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('Zadereiko_Frontend_Pro/hw24/dist/css'));
});

// Конкатенація та мінімізація JS
gulp.task('scripts', function () {
  return gulp.src('Zadereiko_Frontend_Pro/hw24/src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('Zadereiko_Frontend_Pro/hw24/dist/js'));
});

// Спостереження за змінами у файлах
gulp.task('watch', function () {
  gulp.watch('Zadereiko_Frontend_Pro/hw24/src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('Zadereiko_Frontend_Pro/hw24/src/js/**/*.js', gulp.series('js'));
});

// Запуск завдань за замовчуванням
gulp.task('default', gulp.parallel('sass', 'scripts', 'watch'));