const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Компіляція SASS в CSS
gulp.task('sass', function () {
  return gulp.src('homeworks/hw24/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('homeworks/hw24/dist/css'));
});


// Конкатенація та мінімізація JS
gulp.task('scripts', function () {
  return gulp.src('homeworks/hw24/src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('homeworks/hw24/dist/js'));
});

// Спостереження за змінами у файлах
gulp.task('watch', function () {
  gulp.watch('homeworks/hw24/src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('homeworks/hw24/src/js/**/*.js', gulp.series('js'));
});

// Запуск завдань за замовчуванням
gulp.task('default', gulp.parallel('sass', 'scripts', 'watch'));