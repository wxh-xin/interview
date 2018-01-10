'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('src/styles'));
});

gulp.task('default', ['sass']);