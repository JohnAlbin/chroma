'use strict';

var sassyTest = new SassyTest();

describe('@import "chroma/skin";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      includePaths: [path.join(__dirname, '../sass')],
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/skin')
    });
    done();
  });

  describe('@mixin skin()', function() {
    it('should use defined skins', function() {
      return sassyTest.renderFixture('skin/defined-skins', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should accept skins as parameters', function() {
      return sassyTest.renderFixture('skin/parameter-skins', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should restore $chroma-active-scheme', function() {
      return sassyTest.renderFixture('skin/restore-active-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });
});
