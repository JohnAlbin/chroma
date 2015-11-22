# About Chroma

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

The code for Chroma is available on GitHub: https://github.com/JohnAlbin/chroma

## VERSION

These docs are for Chroma 1.1.2.

## USAGE

Here's a quick example of what you can do with Chroma.

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

## INSTALLATION

Chroma can be installed either as a Ruby Gem, as a Bower component, or as a NPM module.

## NPM installation

On your computer, simply run:

```sh
npm install chroma-sass --save-dev
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "../path/to/node_modules/chroma-sass/sass/chroma";
```

Alternatively, you can add the `node_modules/chroma-sass/sass` path to your Sass tool's import paths and then use the simpler:

```scss
@import "chroma";
```

## Bower installation

On your computer, simply run:

```sh
bower install chroma --save-dev
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "../path/to/bower_components/chroma/sass/chroma";
```

Alternatively, you can add the `bower_components/chroma/sass` path to your Sass tool's import paths and then use the simpler:

```scss
@import "chroma";
```

## Ruby Sass Installation

On your computer, simply run:

```sh
gem install chroma-sass
```

If you are using Bundler (and you should!) then you can add it to an existing project by editing the project's Gemfile and adding this line:

```ruby
gem 'chroma-sass',  '~> 1.0'
```

If you don't yet have a Gemfile, you can create one with:

```sh
gem install bundler
bundle init
bundle inject chroma-sass '~> 1.0'
```

If you are using Compass, edit your project's config.rb and add this line:

```ruby
require 'chroma'
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "chroma";
```
