var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jsonlint = require('gulp-jsonlint'),
    header = require('gulp-header'),
    include = require('gulp-include'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');

var pkg = require('./bower.json'),
    fs = require('fs');

/* jshint camelcase:false:start */
function dev() {
  return uglify({
    mangle: false,
    compress: true,
    preserveComments: 'some',
    output: {
      beautify: true,
      indent_level: 2,
      ascii_only: true,
      comments: false,
      width: 80
    }
  });
}

function prod() {
  return uglify({
    mangle: true,
    preserveComments: 'some',
    compress: {
      global_defs: 'angular'
    }
  });
}
/* jshint camelcase:false:end */

function min(path) {
  path.basename += '.min';
}

function banner() {
  var today = new Date();
  var license = fs.readFileSync('./LICENSE.md').toString()
    .split('\n').splice(3).join('\n');
  var str = [
    '/**!',
    ' * <%= pkg.title %> v<%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    ' * Copyright (c) <%= today.getFullYear() %> <%= pkg.author %>',
    ' * <%= license.replace(/\\n/gm, "\\n * ") %>',
    ' */',
    ''].join('\n');

  return header(str, {pkg: pkg, today: today, license: license});
}

gulp.task('build', function() {
  gulp.src('src/*.js')
    .pipe(include())
    // Dev file
    .pipe(dev())
    .pipe(banner())
    .pipe(gulp.dest('dist/'))
    // Prod file
    .pipe(rename(min))
    .pipe(prod())
    .pipe(banner())
    .pipe(gulp.dest('dist/'));
});

gulp.task('pack', ['build'], function() {
  gulp.src('dist/*.js')
    .pipe(zip(pkg.name + '-v' + pkg.version + '.zip'))
    .pipe(gulp.dest('build/'));
});

gulp.task('test', function() {
  gulp.src('*.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());

  gulp.src(['gulpfile.js', 'src/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
