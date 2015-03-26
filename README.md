# About Chroma

WARNING: This is alpha-quality software, so the API is guaranteed to change. But you can always pin your Gemfile to the specific version number you are using.

Chroma is a Sass library that manages a project's color names, color variations, and color schemes.

## USAGE

```scss
@import "chroma";
```

Until the API settles down, you'll need to look in sass/chroma/_functions.scss to see how to use it.

## INSTALLATION

Chroma is distributed as a Ruby Gem. On your computer, simply run:

```sh
gem install chroma-sass
```

If you are using Bundler (and you should!) then you can add it to an existing project by editing the project's Gemfile and adding this line:

```ruby
gem 'chroma-sass',  '~> 1.0.0.alpha.2'
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

* Sass 3.3.0 or later


## LICENSE

Available under the GPL v2 license. See [LICENSE.txt](https://github.com/JohnAlbin/chroma/blob/master/LICENSE.txt).

[![Build Status](https://travis-ci.org/JohnAlbin/chroma.png?branch=master)](https://travis-ci.org/JohnAlbin/chroma)
