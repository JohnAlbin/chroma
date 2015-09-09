'use strict';

var path = require('path'),
  should = require('chai').should(),
  sassyTest = require('sassy-test');

describe('@import "chroma/skin";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/skin'),
      // Path to Chroma.
      library: path.join(__dirname, '../sass')
    });
    done();
  });

  describe('@mixin skin()', function() {
    it('should use defined skins', function(done) {
      sassyTest.renderFixture('skin/defined-skins', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should accept skins as parameters', function(done) {
      sassyTest.renderFixture('skin/parameter-skins', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should restore $chroma-active-scheme', function(done) {
      sassyTest.renderFixture('skin/restore-active-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
