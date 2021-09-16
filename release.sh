#!/usr/bin/env bash
set -x

# Cleanup
rm -Rf coverage
rm -Rf dist
rm -Rf node_modules
rm yarn.lock

# Prepare
yarn install
yarn lint
yarn test --silent
yarn npm audit --all --recursive
yarn build

# Publish
npm publish --dry-run

set +x

echo
echo "If everything looks okay, use 'npm publish --access public'"
echo
echo "Remember to create a tag"
echo "Remember to increase the version number"
echo
