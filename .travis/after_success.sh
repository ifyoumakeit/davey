#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, releasing canary..."
  yarn lerna publish --canary --conventional-commits --yes
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then
  echo "Releasing from master.."
  git checkout master
  yarn lerna publish --conventional-commits --yes --changelog-preset conventional
fi