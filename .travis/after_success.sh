#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, not releasing..."
  yarn lerna publish --skip-npm --skip-git --conventional-commits --yes
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then
  yarn lerna publish --conventional-commits --yes
fi