'use strict';

// Globals for all test_*.js files.
global.path = require('path');
global.should = require('chai').should();
global.sassyTest = require('sassy-test');

// This before() is run before any test_*.js files.
before(function(done) {
  sassyTest.configurePaths({
    includePaths: [
      // Path to Sass library.
      path.join(__dirname, '../sass')
    ]
  });
  done();
});
