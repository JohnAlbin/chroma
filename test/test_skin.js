'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/skin')
});

describe('@import "chroma/skin";', function() {
  describe('@mixin skin()', function() {
    it('should use defined skins', function() {
      return sassyTest.renderFixture('skin/defined-skins');
    });

    it('should accept skins as parameters', function() {
      return sassyTest.renderFixture('skin/parameter-skins');
    });

    it('should restore $chroma-active-scheme', function() {
      return sassyTest.renderFixture('skin/restore-active-scheme');
    });
  });
});
