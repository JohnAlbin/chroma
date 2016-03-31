'use strict';

var sassyTest = new SassyTest({
  includePaths: [path.join(__dirname, '../sass')],
  // Path to this suite's fixtures.
  fixtures: path.join(__dirname, 'fixtures/functions')
});

describe('@import "chroma/functions";', function() {
  describe('@function is-dangerous-color-keyword()', function() {
    it('should recognize dangerous color keywords', function() {
      return sassyTest.renderFixture('is-dangerous-color-keyword/keyword');
    });

    it('should throw an error on dangerous color keywords', function() {
      return sassyTest.renderFixture('is-dangerous-color-keyword/die-on-dangerous').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal("Sass will convert lightslategray into a hexidecimal value when it uses the \"compressed\" output style and Chroma will not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, quote the keyword like this: 'lightslategray'.");
      });
    });

    it('should recognize compressed color keywords', function() {
      var options = {outputStyle: 'compressed'};
      return sassyTest.renderFixture('is-dangerous-color-keyword/compressed-output', options).then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Sass has converted a color keyword into the hexidecimal value, #789, and Chroma was not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, use quotes around the keyword.');
      });
    });
  });

  describe('@function is-color-keyword()', function() {
    it('should recognize color keywords', function() {
      return sassyTest.renderFixture('is-color-keyword/keyword');
    });

    it('should convert compressed color keywords into strings', function() {
      return sassyTest.renderFixture('is-color-keyword/compressed-output');
    });
  });

  describe('@function chroma-to-string()', function() {
    it('should convert color keywords to strings', function() {
      return sassyTest.renderFixture('chroma-to-string');
    });
  });

  describe('@function color()', function() {
    it('should accept a variable number of parameters', function() {
      return sassyTest.renderFixture('color/variable-parameters');
    });

    it('should error if the color scheme does not exist', function() {
      return sassyTest.renderFixture('color/error-no-scheme').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The color scheme "404" was not found.');
      });
    });

    it('should error if the color does not exist', function() {
      return sassyTest.renderFixture('color/error-no-color').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The color "Earhart" was not found.');
      });
    });

    it('should find a color in the specified color scheme', function() {
      return sassyTest.renderFixture('color/active-scheme');
    });

    it('should find a color in a parent color scheme', function() {
      return sassyTest.renderFixture('color/parent-scheme');
    });

    it('should find a color that references another color', function() {
      return sassyTest.renderFixture('color/ref-color');
    });

    it('should find a color that references another scheme’s color', function() {
      return sassyTest.renderFixture('color/ref-color-scheme');
    });

    it('should find a color that references another scheme’s color that is overridden', function() {
      return sassyTest.renderFixture('color/ref-color-scheme-overridden');
    });

    it('should find a color that references another scheme’s color that is overridden and has a function', function() {
      return sassyTest.renderFixture('color/ref-color-scheme-overridden-function');
    });
  });

  describe('@function define-color-scheme()', function() {
    it('should add a new color scheme to Chroma', function() {
      return sassyTest.renderFixture('define-color-scheme/new');
    });

    it('should error if the parent scheme does not exist', function() {
      return sassyTest.renderFixture('define-color-scheme/error').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Cannot set the parent of scheme to "child" because the color scheme "child" was not found.');
      });
    });

    it('should prevent a user from creating a local $chroma variable', function() {
      return sassyTest.renderFixture('define-color-scheme/prevent-local-chroma');
    });
  });

  describe('@function define-default-color-scheme()', function() {
    it('should update the default color scheme’s description', function() {
      return sassyTest.renderFixture('define-default-color-scheme/description');
    });

    it('should update the default color scheme’s name', function() {
      return sassyTest.renderFixture('define-default-color-scheme/name');
    });

    it('should prevent a user from creating a local $chroma variable', function() {
      return sassyTest.renderFixture('define-default-color-scheme/prevent-local-chroma');
    });
  });

  describe('@function add-colors()', function() {
    it('should accept a variable number of parameters', function() {
      return sassyTest.renderFixture('add-colors/arguments');
    });

    it('should error if the color scheme does not exist', function() {
      return sassyTest.renderFixture('add-colors/error-scheme').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The color scheme "child" was not found.');
      });
    });

    it('should error if the color reference does not exist', function() {
      return sassyTest.renderFixture('add-colors/error-ref').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The color "bermuda" was not found when adding the color "blue".');
      });
    });

    it('should error if the color value is not a color or a string', function() {
      return sassyTest.renderFixture('add-colors/error-value').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('Unexpected value, "0.5", given for color "green".');
      });
    });

    it('should add color names that are color keywords', function() {
      return sassyTest.renderFixture('add-colors/color-keyword');
    });

    it('should add color names that are quoted color keywords', function() {
      return sassyTest.renderFixture('add-colors/quoted-color-keyword');
    });

    it('should add color names that have simple color values', function() {
      return sassyTest.renderFixture('add-colors/simple-value');
    });

    it('should add color names that are references to other colors', function() {
      return sassyTest.renderFixture('add-colors/color-ref');
    });

    it('should add the color name to the "referenced by" list for each referenced color', function() {
      return sassyTest.renderFixture('add-colors/referenced-by');
    });

    it('should add color names that have function variations', function() {
      return sassyTest.renderFixture('add-colors/function');
    });

    it('should add color names that have function variations and are references', function() {
      return sassyTest.renderFixture('add-colors/function-ref');
    });

    it('should error if the color function does not exist', function() {
      return sassyTest.renderFixture('add-colors/error-function').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The function "nonexistant-function" was not found when adding the color "green".');
      });
    });

    it('should prevent a user from creating a local $chroma variable', function() {
      return sassyTest.renderFixture('add-colors/prevent-local-chroma');
    });
  });

  describe('@function define-skin()', function() {
    it('should add a skin to Chroma', function() {
      return sassyTest.renderFixture('define-skin/skin');
    });

    it('should warn the user define-skin() is deprecated', function() {
      return sassyTest.renderFixture('define-skin/deprecated').then(function(result) {
        expect(result.warn[0]).to.equal('The define-skin() function is deprecated. Use define-skins() instead.');
      });
    });
  });

  describe('@function define-skins()', function() {
    it('should add a list of skins to Chroma', function() {
      return sassyTest.renderFixture('define-skins/skin');
    });

    it('should error if the color scheme does not exist', function() {
      return sassyTest.renderFixture('define-skins/error-scheme').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The color scheme "not-existant" was not found.');
      });
    });

    it('should error if the selector is not a string', function() {
      return sassyTest.renderFixture('define-skins/error-selector').then(function() {
        throw new Error('An error should have occurred');
      }).catch(function(error) {
        expect(error).to.exist;
        expect(error.message).to.equal('The selector for the default skin was a map, but should be a string.');
      });
    });

    it('should prevent a user from creating a local $chroma variable', function() {
      return sassyTest.renderFixture('define-skins/prevent-local-chroma');
    });
  });
});
