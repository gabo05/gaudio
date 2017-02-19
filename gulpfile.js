var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('default', ['minifyCSS', 'uglifyJS', 'moveDeps'], function() {
    // place code for your default task here
});
gulp.task('minifyCSS', function() {
    gulp.src(['app/css/style.css'])
        .pipe(concatCSS("style.min.css"))
        .pipe(gulp.dest('app/dist/css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(replace('../', '../../'))
        .pipe(replace('/roboto', ''))
        .pipe(gulp.dest('app/dist/css'));
});
gulp.task('uglifyJS', function(){
    //Media
    gulp.src(['app/js/app.js', 'app/js/controllers/media-controller.js'])
        .pipe(concat("media.js"))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/dist/js'));
});
gulp.task('moveDeps', function(){
    gulp.src(['app/libdev/angular/angular.min.js', 'app/libdev/jquery/dist/jquery.min.js', 'app/libdev/isMobile/isMobile.min.js',  'app/libdev/materialize/dist/js/materialize.min.js'])
        .pipe(gulp.dest('app/lib/js'));
    gulp.src(['app/libdev/materialize/dist/css/materialize.min.css', 'app/libdev/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest('app/lib/css'));
    gulp.src(['app/libdev/font-awesome/fonts/fontawesome-*'])
        .pipe(gulp.dest('app/lib/fonts'));
    gulp.src(['app/libdev/materialize/fonts/roboto/Roboto-*'])
        .pipe(gulp.dest('app/lib/fonts/roboto'));
});