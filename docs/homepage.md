# About Chroma

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

## VERSION

These docs are for Chroma 1.0.0.

## USAGE

Here's a quick example of what you can do with Chroma.

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

Chroma can be installed either as a Ruby Gem or as a Bower component.

## Ruby Sass Installation

On your computer, simply run:

```sh
gem install chroma-sass
```

If you are using Bundler (and you should!) then you can add it to an existing project by editing the project's Gemfile and adding this line:

```ruby
gem 'chroma-sass',  '~> 1.0'
```

If you are using Compass, edit your project's config.rb and add this line:

```ruby
require 'chroma'
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "chroma";
```

## Bower installation

On your computer, simply run:

```sh
bower install chroma-sass --save-dev
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "../path/to/bower_components/chroma/chroma";
```

Alternatively, you can add the `bower_components/chroma` path to your Sass tool's import paths and then use the simpler:

```scss
@import "chroma";
```
