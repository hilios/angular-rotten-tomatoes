var gulp = require('gulp'),
    header = require('gulp-header'),
    include = require('gulp-include'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

var pkg = require('./bower.json')
    fs = require('fs');


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

function min(path) {
  path.basename += ".min";
}

function banner() {
  var today = new Date();
  var license = fs.readFileSync('./LICENSE.md').toString()
    .split('\n').splice(3).join('\n');
  var banner = [
    '/**!',
    ' * <%= pkg.title %> v<%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    ' * Copyright (c) <%= today.getFullYear() %> <%= pkg.author %>',
    ' * <%= license.replace(/\\n/gm, "\\n * ") %>',
    ' */',
    ''].join('\n');

  return header(banner, {pkg: pkg, today: today, license: license});
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
