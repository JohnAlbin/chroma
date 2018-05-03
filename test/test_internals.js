'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/internals')
});

describe('@import "chroma/internals";', function() {
  describe('@function chroma-has-scheme()', function() {
    it('should determine if a scheme exists or not', function() {
      return sassyTest.renderFixture('chroma-has-scheme');
    });
  });

  describe('@function chroma-schemes()', function() {
    it('should list all schemes', function() {
      return sassyTest.renderFixture('chroma-schemes');
    });
  });

  describe('@function chroma-has-color()', function() {
    it('should find a color in the default scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/default-scheme');
    });

    it('should find a color in the active scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/active-scheme');
    });

    it('should find a color in a child color scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/child-scheme');
    });

    it('should find a color in a parent color scheme', function() {
      return sassyTest.renderFixture('chroma-has-color/parent-scheme');
    });
  });

  describe('@function _chroma-add-name()', function() {
    it('should add a color', function() {
      return sassyTest.renderFixture('_chroma-add-name');
    });
  });

  describe('@function _chroma-init()', function() {
    it('should be called with @import "chroma";', function() {
      return sassyTest.renderFixture('_chroma-init/auto');
    });

    it('should initialize $chroma', function() {
      return sassyTest.renderFixture('_chroma-init/init');
    });

    it('should not re-initialize $chroma when called repeatedly', function() {
      return sassyTest.renderFixture('_chroma-init/re-init');
    });
  });
});
