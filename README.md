## TypeScript 2.0 Pre boilerplate for node and the browser

[![Build Status](https://travis-ci.org/Kflash/sikky.svg?branch=master)](https://travis-ci.org/Kflash/sikky)
[![CircleCI](https://circleci.com/gh/Kflash/sikky.svg?style=svg)](https://circleci.com/gh/Kflash/sikky)
[![Build status](https://ci.appveyor.com/api/projects/status/vibxi4wro4qwbdtw?svg=true)](https://ci.appveyor.com/project/Kflash/sikky)
[![Coverage Status](https://coveralls.io/repos/github/Kflash/sikky/badge.svg?branch=master)](https://coveralls.io/github/Kflash/sikky?branch=master)
[![npm version](https://badge.fury.io/js/sikky.svg)](https://badge.fury.io/js/sikky)
[![npm downloads](https://img.shields.io/npm/dm/sikky.svg)](https://www.npmjs.org/package/sikky)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/kflash/sikky/blob/master/LICENSE.md)

A fast, and small sized TypeScript 2.0 boilerplate. All source files get transpiled down to `ES2015` by default. `Rollup` and `Bublé` are used to make a clean `ES2015` bundle.`Bublé` is used for compability with older browsers. Easy to get rid of or replaced with `Babel`.

Debugging and server testing can be done within  `VSCode`.

A complete bundle time is assumed to be around 2 ms, and 4 ms for the browser tests. Depends on your computer and the size of your source files.

## Features

- [x] Statically typed build system for working with [Typescript](https://www.typescriptlang.org/) 2.0 Pre
- [x] VSCode integration. Debug and run tests in the editor.
- [x] Consistent code style with [TSLint](https://palantir.github.io/tslint/).
- [x] [Bublé](https://gitlab.com/Rich-Harris/buble) as the ES2015 compiler
- [x] [Rollup](http://rollupjs.org/) for bundling
- [x] Intelligent code editing with [VSCode](https://code.visualstudio.com/)
- [x] Experimental support for [ES7](https://tc39.github.io/ecma262/) decorators.
- [x] async/await and generators support for ES5/ES3
- [x] [Karma](https://karma-runner.github.io/0.13/index.html) as the test runner
- [x] Test Driven Development (TDD)
- [x] [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/) de facto standard
- [x] [Sinon](http://sinonjs.org/) for test doubles
- [x] Environment variabels
- [x] Code Coverage with [Istanbul](https://github.com/gotwarlost/istanbul)
- [x] Production and development build with [Rollup](http://rollupjs.org/).
- [x] ECMAScript 2015 modules in Node.
- [x] Allow dead code elimination for ES6 modules
- [x] SourceMap
- [x] TSX / JSX
- [x] Easy debugging

## Quick start

The only development dependency of this project is [Node.js](https://nodejs.org/en/). So just make sure you have it installed. Then
type few commands known to every Node developer...

```bash
git clone --depth 1 https://github.com/kflash/sikky.git
cd sikky
# install the project's dependencies
npm install

# dev build
npm run build:dev
# prod build
npm run build:prod
```
... and boom! You have it all setup for you!

## Workflow

* `npm run build` - transpile down to ES5 and builds a bundle both for development and production
* `npm run build:dev` - transpile down to ES5 and builds a bundle for development
* `npm run build:prod` - transpile down to ES5 and builds a bundle for production
* `npm run build:vcode` - build task for the VSCode editor
* `npm run build:watch` - watch your TypeScript files and trigger recompilation on changes.
* `npm run lint:src` - validates all source files
* `npm run lint:tests` - validates all test files
* `npm run clean` - removed the dist, coverage and build folders
* `npm run clean:build` - remove the build folder
* `npm run clean:dist` - removed the dist folder
* `npm run test` - run tests both for browser and node
* `npm run test:browser` - run all unit tests in the browser
* `npm run test:node` - run all unit tests in the `node.js environment`
* `npm run tdd:browser` - run all unit tests and watch files for changes in the browser.
* `npm run tdd:node` - run all unit tests and watch files for changes in the `node.js` environment.
* `npm run debug` - debug task used by `VSCode`.
* `npm run dependencies:check` - shows a list over dependencies with a higher version number then the current one - if any
* `npm run dependencies:upgrade` - automatically upgrade all devDependencies & dependencies, and update package.json

## Node development

Start the `VSCode editor`, and press `Ctrl+Shift+B` to build the project. You will see compiler output in the output window (`Ctrl+Shift+U`) indicating that TypeScript transpile your source code to `ES2015`.

To stop the compilation, press `Ctrl+P → > Tasks: Terminate Running Task`.

Press `F5` to start debugging.

To run the Mocha tests on `node.js` - press `F1` and then type `task` to see all tasks available. Click on `test` to run the tests.

## Watch

With the `npm run build:watch`, the `TypeScript 2.0` compiler will start in watch mode, and watch input files and trigger recompilation on changes. Dead code elimination for ES6 modules are activated by default, so later on you can use either
`Webpack 2.0` (*early beta stage*) or `Rollup` to perform tree shaking.

The watch task inform you if something is wrong with your code, and can come up with suggestions on how to solve current issue.

```bash
7:28:24 PM - File change detected. Starting incremental compilation...
src/universal/foo.ts(7,10): error TS2348: Value of type 'typeof TeaSpoon' is not callable.
Did you mean to include 'new'?
```

## Continuous integration (CI)

`Travis`, `Circle` and `Appveyor` are the only supported `CI`. `Travis` is setup to work with Linux and OSX.
`Appveyor` only runs in a `Windows` environment, but are configured to run on both the `x86` and `x64` platform.

**Note!** You need to change permissons on the `.sh` files. Navigate to the 'scripts/ci' folder, and then (*if you are using git*) type this on the command line: `update-index --chmod=+x before.sh`. The permissons will now change from `644` to `755`.
`before.sh` need to be changed with the name on the other files to change permisson on all files.

## Test-driven development (TDD)

It's integrated a `tdd` task both for the browser tests, and server tests.

## Code coverage

The library is set up to integrate with [`Coveralls.io`](https://coveralls.io/), and are using [`Istanbul`](https://github.com/gotwarlost/istanbul) and the
[`rollup-plugin-coverage`](https://gitlab.com/kflash/rollup-plugin-coverage) plugin to generate coverage report.

## Server testing

Server testing is done with `Mocha + Chai`. The server tests can be run fromt the command line - `npm run test:node` -, or within the `VSCode editor`.

## Android and iOS

This boilerplate is tested against `Travis CI` configured to run `Android` with `SDK version android-19 - 23`.
It's not tested with `iOS`. But the conlusion is that this works just fine.

## Browser testing

Browser testing are done with Karma as the test runner. Rollup preprocessor are used together with `Bublé`. This can very easily be swapped out
with another solution. A `rollup-plugin-babel` plugin can be used if you prefer `Babel` over `Bublé`.

## Linting

This boilerplate uses `TSLint` to lint your source. To change the rules, edit the .tslint.json` file in the root directory, respectively.

## FAQ

### When should I consider using this boilerplate?

This library is ideal for libraries that export a single file.

### Will this boilerplate always support the last on the market?

Yes. It will always be up-to-date.

### What's the browser compatibility?

As a rule of thumb, `TypeScript`, `Bublé` and `Babel` works best in `IE9` and above.

### What's the cost of transpiling?

A thorough analysis of this question can be found [here](https://github.com/samccone/The-cost-of-transpiling-es2015-in-2016).
