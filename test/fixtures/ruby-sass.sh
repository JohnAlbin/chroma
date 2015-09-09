#!/bin/sh

echo "Generating output.css files with Ruby Sass…";
echo;

# Use the latest Ruby Sass.
bundle install;

for FILENAME in `find . -name "input.scss" -print`; do
  FILENAME=`echo $FILENAME | sed -E 's/\/input.scss//'`;
  EXPECTED=`cat $FILENAME/output.css`;
  echo "- $FILENAME:";
  if [[ $FILENAME == './functions/is-dangerous-color-keyword/compressed-output' || $FILENAME == './colour/is-dangerous-colour-keyword/compressed-output' ]]; then
    bundle exec sass --load-path=../../sass/ --force --sourcemap=none --style compressed --update $FILENAME/input.scss:$FILENAME/output.css;
  else
    bundle exec sass --load-path=../../sass/ --force --sourcemap=none --update $FILENAME/input.scss:$FILENAME/output.css;
  fi
	if [[ $? != 0 && $EXPECTED == 'ERROR' ]]; then
	  echo "  Error was expected.";
    git checkout $FILENAME/output.css;
  fi
done

# Of course, the old libsass tests fails.
git checkout ./internals/_is-old-libsass/output.css;
git checkout ./internals/_is-keyword-string/output.css;

rm -rf ./.sass-cache;
