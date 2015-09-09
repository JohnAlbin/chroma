# About Chroma

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

## USAGE

Full documentation is available at [http://johnalbin.github.io/chroma/](http://johnalbin.github.io/chroma/). But here are some quick examples to give you an idea of what Chroma can do.

```scss
@import "chroma";

// Define the default color scheme.
$chroma: define-default-color-scheme('Descriptive color names for use in "functional" color names below.');

// Add colors to the default color scheme.
$chroma: add-colors((
  white:       #fff,
  grey-medium: #706e6c,
  black:       #000,
  blue:        #0e71b8,
  red:         #c00,
));

// Create a "functional" color scheme that inherits from the default color scheme.
$chroma: define-color-scheme('functional', 'Colors used by functional parts of the design.');

// Add colors to the functional color scheme.
$chroma: add-colors('functional', (
  // Define a primary highlight color.
  primary:     'blue',

  // Have the "text" color use the hex value given to the "black" color. Even
  // though the "functional" color scheme doesn't define "black", it inherits
  // from the "default" color scheme where "black" is defined.
  text:        'black',

  // Colors can inherit from colors named earlier in the call to add-colors().
  heading:     'text',

  // Have the link color use the primary color.
  link:        'primary',
));

// Create an "alternate" color scheme that inherits from the "functional" color scheme.
$chroma: define-color-scheme('alternate', 'Alternate colors for the site.', $parent: 'functional');

// Add colors to the alternate color scheme.
$chroma: add-colors('alternate', (
  primary:     'red',
));

// Set which color scheme should be used by default when calling the color()
// function.
$chroma-active-scheme: 'functional';

.example-ruleset {
  h1 {
    // Outputs #000.
    color: color(heading);
  }
  a {
    // Outputs #0e71b8.
    color: color(link);

    .alternate-color-section & {
      // Outputs #c00.
      color: color(alternate, link);
    }
  }
}
```

## INSTALLATION

Chroma can be installed either as a Ruby Gem, as a Bower component, or as a NPM module. See [Chroma’s online documentation](http://johnalbin.github.io/chroma/) for more information.

## REQUIREMENTS

* Sass 3.4.0 or later

Note: libsass 3.2.5 or earlier does not work with chroma-sass due to a bug in
libsass. ☹ libsass 3.3.0 should fix the bug, but it has not been tested. See
https://github.com/JohnAlbin/chroma/issues/10

## LICENSE

Available under the GPL v2 license. See [LICENSE.txt](https://github.com/JohnAlbin/chroma/blob/master/LICENSE.txt).

[![Build Status](https://travis-ci.org/JohnAlbin/chroma.png?branch=master)](https://travis-ci.org/JohnAlbin/chroma)
