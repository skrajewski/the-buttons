var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var nunjucks = require('gulp-nunjucks');
var browserSync = require('browser-sync').create();

gulp.task('style', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['style', 'build'], function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch('./scss/**/*.scss', ['style']);
    gulp.watch('./build/**/*.html', ['build']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('build', function () {
    return gulp.src('./build/*.html')
        .pipe(nunjucks.compile({}))
        .pipe(gulp.dest('./public/'));
})
