var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var nunjucks = require('gulp-nunjucks');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');

gulp.task('style', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['style', 'scripts'], function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch('./scss/**/*.scss', ['style']);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
    gulp.watch('./build/js/*.js', ['scripts']).on('change', browserSync.reload);;
});

gulp.task('scripts', function () {
    gulp.src('./build/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/js'));
});
