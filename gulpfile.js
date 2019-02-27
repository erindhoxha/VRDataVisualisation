'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require("gulp-uglify");
var pump = require("pump");

sass.compiler = require('node-sass');

gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
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