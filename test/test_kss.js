'use strict';

var path = require('path'),
  should = require('chai').should(),
  sassyTest = require('sassy-test');

describe('@import "chroma/colour";', function() {
  before(function (done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/kss'),
      // Path to Chroma.
      library: path.join(__dirname, '../sass')
    });
    done();
  });

  it('should not be imported with @import "chroma";', function (done) {
    sassyTest.renderFixture('import', {}, function (error, result, expectedOutput) {
      should.not.exist(error);
      done();
    });
  });

  describe('@function chroma-kss-markup()', function() {
    it('should output HTML for KSS style guide', function(done) {
      sassyTest.renderFixture('chroma-kss-markup', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function chroma-kss-styles()', function() {
    it('should output styles for KSS style guide', function(done) {
      sassyTest.renderFixture('chroma-kss-styles', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
