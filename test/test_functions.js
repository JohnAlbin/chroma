'use strict';

describe('@import "chroma/functions";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/functions')
    });
    done();
  });

  describe('@function is-dangerous-color-keyword()', function() {
    it('should recognize dangerous color keywords', function(done) {
      sassyTest.renderFixture('is-dangerous-color-keyword/keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should throw an error on dangerous color keywords', function(done) {
      sassyTest.renderFixture('is-dangerous-color-keyword/die-on-dangerous', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal("Sass will convert lightslategray into a hexidecimal value when it uses the \"compressed\" output style and Chroma will not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, quote the keyword like this: 'lightslategray'.");
        done();
      });
    });

    it('should recognize compressed color keywords', function(done) {
      var options = {outputStyle: 'compressed'};
      sassyTest.renderFixture('is-dangerous-color-keyword/compressed-output', options, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Sass has converted a color keyword into the hexidecimal value, #789, and Chroma was not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, use quotes around the keyword.');
        done();
      });
    });
  });

  describe('@function is-color-keyword()', function() {
    it('should recognize color keywords', function(done) {
      sassyTest.renderFixture('is-color-keyword/keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should convert compressed color keywords into strings', function(done) {
      sassyTest.renderFixture('is-color-keyword/compressed-output', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function chroma-to-string()', function() {
    it('should convert color keywords to strings', function(done) {
      sassyTest.renderFixture('chroma-to-string', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function color()', function() {
    it('should accept a variable number of parameters', function(done) {
      sassyTest.renderFixture('color/variable-parameters', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the color scheme does not exist', function(done) {
      sassyTest.renderFixture('color/error-no-scheme', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The color scheme "404" was not found.');
        done();
      });
    });

    it('should error if the color does not exist', function(done) {
      sassyTest.renderFixture('color/error-no-color', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The color "Earhart" was not found.');
        done();
      });
    });

    it('should find a color in the specified color scheme', function(done) {
      sassyTest.renderFixture('color/active-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color in a parent color scheme', function(done) {
      sassyTest.renderFixture('color/parent-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color that references another color', function(done) {
      sassyTest.renderFixture('color/ref-color', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color that references another scheme’s color', function(done) {
      sassyTest.renderFixture('color/ref-color-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color that references another scheme’s color that is overridden', function(done) {
      sassyTest.renderFixture('color/ref-color-scheme-overridden', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a color that references another scheme’s color that is overridden and has a function', function(done) {
      sassyTest.renderFixture('color/ref-color-scheme-overridden-function', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function define-color-scheme()', function() {
    it('should add a new color scheme to Chroma', function(done) {
      sassyTest.renderFixture('define-color-scheme/new', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the parent scheme does not exist', function(done) {
      sassyTest.renderFixture('define-color-scheme/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Cannot set the parent of scheme to "child" because the color scheme "child" was not found.');
        done();
      });
    });

    it('should prevent a user from creating a local $chroma variable', function(done) {
      sassyTest.renderFixture('define-color-scheme/prevent-local-chroma', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function define-default-color-scheme()', function() {
    it('should update the default color scheme’s description', function(done) {
      sassyTest.renderFixture('define-default-color-scheme/description', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should update the default color scheme’s name', function(done) {
      sassyTest.renderFixture('define-default-color-scheme/name', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should prevent a user from creating a local $chroma variable', function(done) {
      sassyTest.renderFixture('define-default-color-scheme/prevent-local-chroma', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function add-colors()', function() {
    it('should accept a variable number of parameters', function(done) {
      sassyTest.renderFixture('add-colors/arguments', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the color scheme does not exist', function(done) {
      sassyTest.renderFixture('add-colors/error-scheme', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The color scheme "child" was not found.');
        done();
      });
    });

    it('should error if the color reference does not exist', function(done) {
      sassyTest.renderFixture('add-colors/error-ref', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The color "bermuda" was not found when adding the color "blue".');
        done();
      });
    });

    it('should error if the color value is not a color or a string', function(done) {
      sassyTest.renderFixture('add-colors/error-value', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Unexpected value, "0.5", given for color "green".');
        done();
      });
    });

    it('should add color names that are color keywords', function(done) {
      sassyTest.renderFixture('add-colors/color-keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add color names that are quoted color keywords', function(done) {
      sassyTest.renderFixture('add-colors/quoted-color-keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add color names that have simple color values', function(done) {
      sassyTest.renderFixture('add-colors/simple-value', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add color names that are references to other colors', function(done) {
      sassyTest.renderFixture('add-colors/color-ref', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add the color name to the "referenced by" list for each referenced color', function(done) {
      sassyTest.renderFixture('add-colors/referenced-by', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add color names that have function variations', function(done) {
      sassyTest.renderFixture('add-colors/function', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add color names that have function variations and are references', function(done) {
      sassyTest.renderFixture('add-colors/function-ref', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the color function does not exist', function(done) {
      sassyTest.renderFixture('add-colors/error-function', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The function "nonexistant-function" was not found when adding the color "green".');
        done();
      });
    });

    it('should prevent a user from creating a local $chroma variable', function(done) {
      sassyTest.renderFixture('add-colors/prevent-local-chroma', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function define-skin()', function() {
    it('should add a skin to Chroma', function(done) {
      sassyTest.renderFixture('define-skin/skin', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should warn the user it is deprecated', function(done) {
      sassyTest.renderFixture('define-skin/deprecated', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        result.warn[0].should.equal('The define-skin() function is deprecated. Use define-skins() instead.');
        done();
      });
    });
  });

  describe('@function define-skins()', function() {
    it('should add a list of skins to Chroma', function(done) {
      sassyTest.renderFixture('define-skins/skin', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the color scheme does not exist', function(done) {
      sassyTest.renderFixture('define-skins/error-scheme', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The color scheme "not-existant" was not found.');
        done();
      });
    });

    it('should error if the selector is not a string', function(done) {
      sassyTest.renderFixture('define-skins/error-selector', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The selector for the default skin was a map, but should be a string.');
        done();
      });
    });

    it('should prevent a user from creating a local $chroma variable', function(done) {
      sassyTest.renderFixture('define-skins/prevent-local-chroma', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });
});
