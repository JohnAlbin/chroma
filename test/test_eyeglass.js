'use strict';

var eyeglass = require('eyeglass');
var sassyTest = new SassyTest({
  fixtures: path.join(__dirname, 'fixtures/eyeglass')
});
var options = {
  eyeglass: {
    // Eyeglass will look in the root for a package.json.
    root: sassyTest.fixture()
  }
};

describe('Eyeglass integration tests', function() {
  it('should fail to import Chroma without Eyeglass', function() {
    return sassyTest.renderFixture('import-chroma').then(function() {
      throw new Error('An error should have occurred');
    }).catch(function(error) {
      expect(error).to.exist;
      expect(error.message).to.include('File to import not found or unreadable: chroma');
    });
  });

  it('should import Chroma with Eyeglass', function() {
    return sassyTest.renderFixture('import-chroma', eyeglass(options));
  });
});
