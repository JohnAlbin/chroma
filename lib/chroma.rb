require 'compass'

project_path     = File.join(File.dirname(__FILE__), '..')
stylesheets_path = File.join(project_path, 'sass')

Compass::Frameworks.register(
  'chroma',
  :path => project_path,
  :stylesheets_directory => stylesheets_path
)
