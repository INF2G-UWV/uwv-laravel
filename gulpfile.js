var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  frontend: [
    './public/bower_components/angular/angular.js',
    './public/bower_components/angular-bootstrap/ui-bootstrap.min.js',
    './public/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    './public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './public/app/frontend/app.js',
    './public/app/frontend/controllers/*.js',
    './public/app/frontend/helpers/*.js',
    './public/app/frontend/services/*.js'
  ],
  admin: [
  ]
};

gulp.task('frontend', function () {
  gulp.src(paths.frontend)
    .pipe(sourcemaps.init())
    .pipe(concat('frontend.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('admin', function () {
  gulp.src(paths.admin)
    .pipe(sourcemaps.init())
    .pipe(concat('admin.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('default', ['frontend', 'admin'], function () {
  gulp.watch(paths.frontend, ['frontend']);
  gulp.watch(paths.admin, ['admin']);
});
