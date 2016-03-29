'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/internals')
});

describe('@import "chroma/internals";', function() {
  describe('@function chroma-has-scheme()', function() {
    it('should determine if a scheme exists or not', function() {
      return sassyTest.renderFixture('chroma-has-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function chroma-schemes()', function() {
    it('should list all schemes', function() {
      return sassyTest.renderFixture('chroma-schemes', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function chroma-has-color()', function() {
    it('should find a color in the default scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/default-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a color in the active scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/active-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a color in a child color scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/child-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a color in a parent color scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/parent-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function _chroma-add-name()', function() {
    it('should add a color', function() {
      return sassyTest.renderFixture('_chroma-add-name', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function _chroma-init()', function() {
    it('should be called with @import "chroma";', function() {
      return sassyTest.renderFixture('_chroma-init/auto', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should initialize $chroma', function() {
      return sassyTest.renderFixture('_chroma-init/init', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should not re-initialize $chroma when called repeatedly', function() {
      return sassyTest.renderFixture('_chroma-init/re-init', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function _is-old-libsass()', function() {
    it('should return "true" when rendered with LibSass before 3.3.0', function() {
      return sassyTest.renderFixture('_is-old-libsass', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function _is-keyword-string()', function() {
    it('should detect a color keyword in a string', function() {
      return sassyTest.renderFixture('_is-keyword-string', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });
});
