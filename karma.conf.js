// Karma configuration
module.exports = function(config) {
  var autoWatch = true;
  var singleRun = false;

  // Patch config to performe a single run for integration server through the
  // --ci flag: karma start --ci
  process.argv.forEach(function(arg) {
    if (arg == '--ci') {
      autoWatch = false;
      singleRun = true;
    }
  });

  config.set({
    frameworks: [
      'mocha',
      'chai',
      'sinon-chai'
    ],
    files: [
      'test/vendor/angular/angular.js',
      'test/vendor/angular-mocks/angular-mocks.js',
      'src/rottenTomatoes/**/*.js',
      'src/ngRottenTomatoes.js',
      'test/config.js',
      'test/**/*Spec.js'
    ],
    exclude: [
      '**/*.min.js'
    ],
    reporters: [
      'dots',
      'coverage'
    ],
    preprocessors: {
      'src/**/*.js': 'coverage'
    },
    coverageReporter: {
      type: 'text',
      dir: 'test/coverage'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    autoWatch: autoWatch,
    browsers: [
      'PhantomJS'
    ],
    singleRun: singleRun
  });
};
