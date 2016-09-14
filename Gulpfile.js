var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('style', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./scss/**/*.scss', ['style']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});
