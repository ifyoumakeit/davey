npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN

git config credential.helper store
echo "https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/ifyoumakeit/davey.git" > ~/.git-credentials

git checkout $TRAVIS_BRANCH
git config --global user.email $GITHUB_EMAIL
git config --global user.token $GITHUB_TOKEN
git config --global push.default simple  