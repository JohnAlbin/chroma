# -*- encoding: utf-8 -*-

Gem::Specification.new do |spec|
  spec.name        = 'chroma-sass'

  spec.summary     = %q{Chroma is the Sass color manager.}
  spec.description = %q{Chroma is the Sass color manager, managing color names, variations, and color schemes.}

  spec.homepage    = 'https://github.com/JohnAlbin/chroma'
  spec.rubyforge_project =

  spec.version     = '1.2.1'
  spec.date        = '2015-11-24'
  spec.licenses    = ['GPL-2']

  spec.authors     = ['John Albin Wilkins']
  spec.email       = 'virtually.johnalbin@gmail.com'

  spec.add_runtime_dependency('sass', "~> 3.4")

  spec.files       = `git ls-files`.split($/).select {|f| File.exist?(f) && f =~ %r{^(lib|sass)/} }
  spec.files       += %w(
    bower.json
    chroma-sass.gemspec
    LICENSE.txt
    package.json
    README.md
  )
end
