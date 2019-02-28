'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');



sass.compiler = require('node-sass');

gulp.task('compress', function () {
    gulp.src(['js/*.js'])
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['bootstrap.js', '-min.js', 'bootstrap']
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

function defaultTask(cb) {
    console.log("Done!");
    console.log("Add another task!");
    cb();
}

exports.default = defaultTask