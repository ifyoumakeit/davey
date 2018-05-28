#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  echo "We are in a pull request, releasing canary..."
  yarn lerna-semantic-release perform --canary
  exit 0
fi

if [[ $TRAVIS_BRANCH == 'master' ]]; then
  echo "Releasing from master.."  
  yarn lerna-semantic-release perform
  yarn lerna-semantic-release post
fi