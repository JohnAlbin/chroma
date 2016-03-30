'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/colour')
});

describe('@import "chroma/colour";', function() {
  it('should not be imported with @import "chroma";', function() {
    return sassyTest.renderFixture('import', {}).catch(function(error) {
      expect(error).to.not.exist;
    }).then(function(result) {
      expect(result.css).to.exist;
    });
  });

  describe('@function is-dangerous-colour-keyword()', function() {
    it('should recognize dangerous colour keywords', function() {
      return sassyTest.renderFixture('is-dangerous-colour-keyword/keyword', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should throw an error on dangerous colour keywords', function() {
      return sassyTest.renderFixture('is-dangerous-colour-keyword/die-on-dangerous', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal("Sass will convert lightslategray into a hexidecimal value when it uses the \"compressed\" output style and Chroma will not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, quote the keyword like this: 'lightslategray'.");
      });
    });

    it('should recognize compressed colour keywords', function() {
      var options = {outputStyle: 'compressed'};
      return sassyTest.renderFixture('is-dangerous-colour-keyword/compressed-output', options).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Sass has converted a colour keyword into the hexidecimal value, #789, and Chroma was not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, use quotes around the keyword.');
      });
    });
  });

  describe('@function is-colour-keyword()', function() {
    it('should recognize colour keywords', function() {
      return sassyTest.renderFixture('is-colour-keyword/keyword', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should convert compressed colour keywords into strings', function() {
      return sassyTest.renderFixture('is-colour-keyword/compressed-output', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function colour()', function() {
    it('should accept a variable number of parameters', function() {
      return sassyTest.renderFixture('colour/variable-parameters', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should error if the colour scheme does not exist', function() {
      return sassyTest.renderFixture('colour/error-no-scheme', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The colour scheme "404" was not found.');
      });
    });

    it('should error if the colour does not exist', function() {
      return sassyTest.renderFixture('colour/error-no-colour', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The colour "Earhart" was not found.');
      });
    });

    it('should find a colour in the specified colour scheme', function() {
      return sassyTest.renderFixture('colour/active-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a colour in a parent colour scheme', function() {
      return sassyTest.renderFixture('colour/parent-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a colour that references another colour', function() {
      return sassyTest.renderFixture('colour/ref-colour', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a colour that references another scheme’s colour', function() {
      return sassyTest.renderFixture('colour/ref-colour-scheme', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a colour that references another scheme’s colour that is overridden', function() {
      return sassyTest.renderFixture('colour/ref-colour-scheme-overridden', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should find a colour that references another scheme’s colour that is overridden and has a function', function() {
      return sassyTest.renderFixture('colour/ref-colour-scheme-overridden-function', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function define-colour-scheme()', function() {
    it('should add a new colour scheme to Chroma', function() {
      return sassyTest.renderFixture('define-colour-scheme/new', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should error if the parent scheme does not exist', function() {
      return sassyTest.renderFixture('define-colour-scheme/error', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Cannot set the parent of scheme to "child" because the colour scheme "child" was not found.');
      });
    });
  });

  describe('@function define-default-colour-scheme()', function() {
    it('should update the default colour scheme’s description', function() {
      return sassyTest.renderFixture('define-default-colour-scheme/description', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should update the default colour scheme’s name', function() {
      return sassyTest.renderFixture('define-default-colour-scheme/name', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });
  });

  describe('@function add-colours()', function() {
    it('should accept a variable number of parameters', function() {
      return sassyTest.renderFixture('add-colours/arguments', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should error if the colour scheme does not exist', function() {
      return sassyTest.renderFixture('add-colours/error-scheme', {}).then(function(result) {
        expect(result.css).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The colour scheme "child" was not found.');
      });
    });

    it('should error if the colour reference does not exist', function() {
      return sassyTest.renderFixture('add-colours/error-ref', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The colour "bermuda" was not found when adding the colour "blue".');
      });
    });

    it('should error if the colour value is not a colour or a string', function() {
      return sassyTest.renderFixture('add-colours/error-value', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Unexpected value, "0.5", given for colour "green".');
      });
    });

    it('should add colour names that are colour keywords', function() {
      return sassyTest.renderFixture('add-colours/colour-keyword', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add colour names that are quoted colour keywords', function() {
      return sassyTest.renderFixture('add-colours/quoted-colour-keyword', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add colour names that have simple colour values', function() {
      return sassyTest.renderFixture('add-colours/simple-value', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add colour names that are references to other colours', function() {
      return sassyTest.renderFixture('add-colours/colour-ref', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add the colour name to the "referenced by" list for each referenced colour', function() {
      return sassyTest.renderFixture('add-colours/referenced-by', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add colour names that have function variations', function() {
      return sassyTest.renderFixture('add-colours/function', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should add colour names that have function variations and are references', function() {
      return sassyTest.renderFixture('add-colours/function-ref', {}).catch(function(error) {
        expect(error).to.not.exist;
      }).then(function(result) {
        expect(result.css).to.exist;
      });
    });

    it('should error if the colour function does not exist', function() {
      return sassyTest.renderFixture('add-colours/error-function', {}).then(function(result) {
        expect(result).to.not.exist;
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The function "nonexistant-function" was not found when adding the colour "green".');
      });
    });
  });
});
