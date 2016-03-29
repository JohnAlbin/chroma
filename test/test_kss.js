'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/kss')
});

describe('@import "chroma/colour";', function() {
  it('should not be imported with @import "chroma";', function() {
    return sassyTest.renderFixture('import', {}).catch(function(error) {
      expect(error).to.not.exist;
    }).then(function(result) {
      expect(result.css).to.exist;
    });
  });

  describe('@function chroma-kss-markup()', function() {
    it('should output HTML for KSS style guide', function() {
      return sassyTest.renderFixture('chroma-kss-markup', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function chroma-kss-styles()', function() {
    it('should output styles for KSS style guide', function() {
      return sassyTest.renderFixture('chroma-kss-styles', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });
});
