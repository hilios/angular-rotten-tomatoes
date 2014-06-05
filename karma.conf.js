// Karma configuration
module.exports = function(config) {
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
    autoWatch: false,
    browsers: [
      'PhantomJS'
    ],
    singleRun: true
  });
};
