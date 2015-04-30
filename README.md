# About Chroma

WARNING: This is alpha-quality software, so the API is guaranteed to change. But you can always pin your Gemfile to the specific version number you are using.

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

## USAGE

Betters docs are coming, but here's some documentation in the form of example
code.

```scss
@import "chroma";

// Define the default color scheme.
$chroma: define-default-color-scheme('Descriptive color names for use in "functional" color names below.');

// Add colors to the default color scheme.
$chroma: add-colors((
  white:                  #fff,
  off-white:              #eaeaea,
  grey-medium:            #706e6c,
  black:                  #000,

  blue:                   #0e71b8,
  blue-dark:              shade(#0e71b8, 25%),
));

// Create a "functional" color scheme that inherits from the default color scheme.
$chroma: define-color-scheme('functional', 'Colors used by functional parts of the design.');

// Add colors to the functional color scheme.
$chroma: add-colors('functional', (
  // Have the "text" color use the hex value given to the "black" color. Even
  // though the "functional" color scheme doesn't define "black", it inherits
  // from the "default" color scheme where "black" is defined.
  text:                   'black',
  text-subdued:           'grey-medium',

  // The primary highlight color.
  primary:                'blue',

  // Have the link color use the primary color.
  link:                   'primary',
  link-active:            'blue-dark',

  site-name:              'primary',
  heading:                'text',
));

// Create an "alternate" color scheme that inherits from the "functional" color scheme.
$chroma: define-color-scheme('alternate', 'Alternate colors for the site.', 'functional');

// Add colors to the alternate color scheme.
$chroma: add-colors('alternate', (
  red:                    #c00,
  primary:                'red',
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
      color: color(link, alternate);
      // @TODO: Whoops! This doesn't work yet because it finds the "link" color
      // value in the functional color scheme and never sees that the primary
      // color has changed.
    }
  }
}
```

## INSTALLATION

Chroma is distributed as a Ruby Gem. On your computer, simply run:

```sh
gem install chroma-sass
```

If you are using Bundler (and you should!) then you can add it to an existing project by editing the project's Gemfile and adding this line:

```ruby
gem 'chroma-sass',  '~> 1.0.0.alpha.4'
```

If you are using Compass, edit your project's config.rb and add this line:

```ruby
require 'chroma'
```

You can then start using Chroma in your Sass files. Just add this line to one of your .sass or .scss files and start creating!

```scss
@import "chroma";
```

## REQUIREMENTS

* Sass 3.4.0 or later

## LICENSE

Available under the GPL v2 license. See [LICENSE.txt](https://github.com/JohnAlbin/chroma/blob/master/LICENSE.txt).
