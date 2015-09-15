'use strict';

describe('@import "chroma/internals";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/internals')
    });
    done();
  });

  describe('@function chroma-has-scheme()', function() {
    it('should determine if a scheme exists or not', function(done) {
      sassyTest.renderFixture('chroma-has-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function chroma-schemes()', function() {
    it('should list all schemes', function(done) {
      sassyTest.renderFixture('chroma-schemes', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function chroma-has-color()', function() {
    it('should find a color in the default scheme', function(done) {
      sassyTest.renderFixture('chroma-has-color/default-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color in the active scheme', function(done) {
      sassyTest.renderFixture('chroma-has-color/active-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color in a child color scheme', function(done) {
      sassyTest.renderFixture('chroma-has-color/child-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color in a parent color scheme', function(done) {
      sassyTest.renderFixture('chroma-has-color/parent-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function _chroma-add-name()', function() {
    it('should add a color', function(done) {
      sassyTest.renderFixture('_chroma-add-name', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function _chroma-init()', function() {
    it('should be called with @import "chroma";', function(done) {
      sassyTest.renderFixture('_chroma-init/auto', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should initialize $chroma', function(done) {
      sassyTest.renderFixture('_chroma-init/init', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should not re-initialize $chroma when called repeatedly', function(done) {
      sassyTest.renderFixture('_chroma-init/re-init', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function _is-old-libsass()', function() {
    it('should return "true" when rendered with LibSass before 3.3.0', function(done) {
      sassyTest.renderFixture('_is-old-libsass', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function _is-keyword-string()', function() {
    it('should detect a color keyword in a string', function(done) {
      sassyTest.renderFixture('_is-keyword-string', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
