'use strict';

describe('@import "chroma/colour";', function() {
  before(function(done) {
    sassyTest.configurePaths({
      // Path to this suite's fixtures.
      fixtures: path.join(__dirname, 'fixtures/colour')
    });
    done();
  });

  it('should not be imported with @import "chroma";', function(done) {
    sassyTest.renderFixture('import', {}, function(error, result, expectedOutput) {
      should.not.exist(error);
      done();
    });
  });

  describe('@function is-dangerous-colour-keyword()', function() {
    it('should recognize dangerous colour keywords', function(done) {
      sassyTest.renderFixture('is-dangerous-colour-keyword/keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should throw an error on dangerous colour keywords', function(done) {
      sassyTest.renderFixture('is-dangerous-colour-keyword/die-on-dangerous', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal("Sass will convert lightslategray into a hexidecimal value when it uses the \"compressed\" output style and Chroma will not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, quote the keyword like this: 'lightslategray'.");
        done();
      });
    });

    it('should recognize compressed colour keywords', function(done) {
      var options = {outputStyle: 'compressed'};
      sassyTest.renderFixture('is-dangerous-colour-keyword/compressed-output', options, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Sass has converted a colour keyword into the hexidecimal value, #789, and Chroma was not be able to determine if the original name was lightslategray or lightslategrey. To prevent this error, use quotes around the keyword.');
        done();
      });
    });
  });

  describe('@function is-colour-keyword()', function() {
    it('should recognize colour keywords', function(done) {
      sassyTest.renderFixture('is-colour-keyword/keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should convert compressed colour keywords into strings', function(done) {
      sassyTest.renderFixture('is-colour-keyword/compressed-output', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function colour()', function() {
    it('should accept a variable number of parameters', function(done) {
      sassyTest.renderFixture('colour/variable-parameters', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the colour scheme does not exist', function(done) {
      sassyTest.renderFixture('colour/error-no-scheme', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The colour scheme "404" was not found.');
        done();
      });
    });

    it('should error if the colour does not exist', function(done) {
      sassyTest.renderFixture('colour/error-no-colour', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The colour "Earhart" was not found.');
        done();
      });
    });

    it('should find a colour in the specified colour scheme', function(done) {
      sassyTest.renderFixture('colour/active-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a colour in a parent colour scheme', function(done) {
      sassyTest.renderFixture('colour/parent-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a colour that references another colour', function(done) {
      sassyTest.renderFixture('colour/ref-colour', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a colour that references another scheme’s colour', function(done) {
      sassyTest.renderFixture('colour/ref-colour-scheme', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a colour that references another scheme’s colour that is overridden', function(done) {
      sassyTest.renderFixture('colour/ref-colour-scheme-overridden', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should find a colour that references another scheme’s colour that is overridden and has a function', function(done) {
      sassyTest.renderFixture('colour/ref-colour-scheme-overridden-function', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function define-colour-scheme()', function() {
    it('should add a new colour scheme to Chroma', function(done) {
      sassyTest.renderFixture('define-colour-scheme/new', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the parent scheme does not exist', function(done) {
      sassyTest.renderFixture('define-colour-scheme/error', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Cannot set the parent of scheme to "child" because the colour scheme "child" was not found.');
        done();
      });
    });
  });

  describe('@function define-default-colour-scheme()', function() {
    it('should update the default colour scheme’s description', function(done) {
      sassyTest.renderFixture('define-default-colour-scheme/description', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should update the default colour scheme’s name', function(done) {
      sassyTest.renderFixture('define-default-colour-scheme/name', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });
  });

  describe('@function add-colours()', function() {
    it('should accept a variable number of parameters', function(done) {
      sassyTest.renderFixture('add-colours/arguments', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the colour scheme does not exist', function(done) {
      sassyTest.renderFixture('add-colours/error-scheme', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The colour scheme "child" was not found.');
        done();
      });
    });

    it('should error if the colour reference does not exist', function(done) {
      sassyTest.renderFixture('add-colours/error-ref', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The colour "bermuda" was not found when adding the colour "blue".');
        done();
      });
    });

    it('should error if the colour value is not a colour or a string', function(done) {
      sassyTest.renderFixture('add-colours/error-value', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('Unexpected value, "0.5", given for colour "green".');
        done();
      });
    });

    it('should add colour names that are colour keywords', function(done) {
      sassyTest.renderFixture('add-colours/colour-keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add colour names that are quoted colour keywords', function(done) {
      sassyTest.renderFixture('add-colours/quoted-colour-keyword', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add colour names that have simple colour values', function(done) {
      sassyTest.renderFixture('add-colours/simple-value', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add colour names that are references to other colours', function(done) {
      sassyTest.renderFixture('add-colours/colour-ref', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add the colour name to the "referenced by" list for each referenced colour', function(done) {
      sassyTest.renderFixture('add-colours/referenced-by', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add colour names that have function variations', function(done) {
      sassyTest.renderFixture('add-colours/function', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should add colour names that have function variations and are references', function(done) {
      sassyTest.renderFixture('add-colours/function-ref', {}, function(error, result, expectedOutput) {
        should.not.exist(error);
        done();
      });
    });

    it('should error if the colour function does not exist', function(done) {
      sassyTest.renderFixture('add-colours/error-function', {}, function(error, result, expectedOutput) {
        error.should.exist;
        error.message.should.equal('The function "nonexistant-function" was not found when adding the colour "green".');
        done();
      });
    });
  });
});
