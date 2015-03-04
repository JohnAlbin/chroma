# -*- encoding: utf-8 -*-

Gem::Specification.new do |spec|
  spec.name         = 'color-maps'

  spec.summary      = %q{A thing.}
  spec.description  = %q{Color Maps is a thing.}

  spec.homepage     = 'http://github.com/JohnAlbin/color-maps'
  spec.rubyforge_project =

  spec.version      = '1.0.0.alpha.1'
  spec.date         = '2015-03-04'
  spec.licenses     = ['GPL-2']

  spec.authors      = ['John Albin Wilkins']
  spec.email        = 'virtually.johnalbin@gmail.com'

  spec.add_runtime_dependency('sass', "~> 3.3")

  spec.files        = `git ls-files`.split($/).select {|f| File.exist?(f) && f =~ %r{^(lib|stylesheets|templates)/} }
  spec.files        += %w(
    LICENSE.txt
    README.md
    color-maps.gemspec
  )
end
