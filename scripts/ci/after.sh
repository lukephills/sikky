#!/usr/bin/env bash

set -ex -o pipefail

# codecov.io integration
bash <(curl -s https://codecov.io/bash)

# Upload to coveralls, but don't _fail_ if coveralls is down.
cat coverage/lcov.info | node_modules/.bin/coveralls || echo "Coveralls upload failed"
node node_modules/lcov-filter/index.js lcov.info config | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage
