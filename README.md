# About Chroma

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

## USAGE

Full documentation is available at [http://johnalbin.github.io/chroma/](http://johnalbin.github.io/chroma/). But here are some quick examples to give you an idea of what Chroma can do.

```scss
@import "chroma";

// Define the default color scheme.
$chroma: define-default-color-scheme('Branding color names for use by "functional" color names below.');

// Add colors to the default color scheme.
$chroma: add-colors((
  white:       #fff,
  black:       #000,
  blue:        #0e71b8,
  red:         #c00,

  // Define a primary highlight color that has the value of our "blue" color.
  // Note: if blue was specified without quotes, Chroma would interpret that as
  // the color keyword blue and not a reference to the "blue" color name.
  primary:     'blue',
));

// Create a "functional" color scheme that inherits from the default color scheme.
$chroma: define-color-scheme('functional', 'Colors used by functional parts of the design.');

// Add colors to the functional color scheme.
$chroma: add-colors('functional', (
  // Have the "text" color use the hex value given to the "black" color. Even
  // though the "functional" color scheme doesn't define "black", it inherits
  // from the "default" color scheme where "black" is defined.
  text:        'black',

  // You can use quoted or unquoted strings to reference other color names.
  // Note: color keywords are not considered strings unless they are quoted.
  heading:     text,

  // Have the link color use the primary color.
  link:        primary,
  link-focus:  (link lighten 20%), // Set the link-focus color to the "link"
                                   // color passed through the color
                                   // function: lighten([color], 20%)
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

    &:focus,
    &:hover {
      // Outputs #3ca5f0, which is lighten(#0e71b8, 20%).
      color: color(link-focus);
    }

    .alternate-color-section & {
      // Outputs #c00.
      color: color(alternate, link);

      &:focus,
      &:hover {
        // Outputs #ff3333, which is lighten(#c00, 20%).
        color: color(alternate, link-focus);
      }
    }
  }
}
```

## Install

Install using one of the following methods:

* Install with [npm](http://npmjs.org/): `npm install --save-dev chroma-sass`
* Install with [Bower](http://bower.io/): `bower install --save-dev chroma`
* Install with [Ruby Gem](https://rubygems.org/gems/chroma-sass): `gem install chroma-sass`<br>
  and, if using Compass, add `require "chroma-sass"` to your config.rb file.
* Install with [Bundler](http://bundler.io/) and Ruby Gem: `bundle inject chroma-sass '~> 1.0'`

See [Chroma’s online documentation](http://johnalbin.github.io/chroma/#installation) for more information.

## REQUIREMENTS

* LibSass 3.2.5 or later
* _or_ Ruby Sass 3.4.0 or later

## LICENSE

Available under the GPL v2 license. See [LICENSE.txt](https://github.com/JohnAlbin/chroma/blob/master/LICENSE.txt).

[![Build Status](https://travis-ci.org/JohnAlbin/chroma.png?branch=master)](https://travis-ci.org/JohnAlbin/chroma/builds)
