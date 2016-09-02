var gulp = require("gulp");
var jslint = require("gulp-jslint");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var livereload = require('gulp-livereload');
var clean = require("gulp-clean");

gulp.task('clean', function () {
    return gulp.src('./dist/', {
            read: false
        })
        .pipe(clean());
});

gulp.task('lint', function () {
    return gulp.src(['./app/*/*.js', "./app/*.js"])
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});


gulp.task("concat", function () {
    return gulp.src(['./app/modules.js', './app/*/*.js', './app/app.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    livereload.listen('3035');
    gulp.watch(['./app/*/*.js'], ['lint', 'clean', 'concat']);
});


gulp.task("default", ["lint", "clean", "concat", "watch"])
