# v.1.0.1

- bug fixes

# v.1.0.0

- BC!! Major refactoring
- webpack with hot reload added
- tests can be run directly in browser. Port 8080.
- introduced "finale bundling"
- improved sourcemap support
- added nodemon support
- paralell processing
- added a new TDD task. This task run all test and build in parallel 
- more options for TypeScript transpiling
- refactored how node tests are working. 
- added code coverage for node tests
- improved code coverage for browser tests ( *karma test runner*)
- Webpack used for browser tests
- Webpack used for node tests
- improved linting. 
- many tasks now runs in parallel (*parallel processing*)
- improved environment variabel support
- improved VSCode integration
- easier debugging with breakpoints
- more tasks added for VSCode
- Everything can be run from withing VSCode
- Chrome debugging enabled for VSCode
- Babel added for testing purpose
- `npm run test` task now runs in paralell and excute both browser and node tests

# v.0.11.2

- updated NPM packages

# v.0.11.1

- **BC!** Bundles files now have a new file extension. `.es.js`, `.js` and `min.js`.
- improved build performance
- separate Rollup config files for development and production builds
- refactored support for ES modules
- 'es6' are now deprecated
- improved performance
- updated NPM packages

# v.0.11.0

- run node.js v. 6 on Circle CI

# v.0.10.10

- improved browser testing

# v.0.10.9

- updated to latest rollup-plugin-typescript version (0.7.6)

# v.0.10.8

- updated NPM packages

# v.0.10.7

- updated readme

# v.0.10.6

- updated `rollup-plugin-coverage` to latest version.
- now support sourcemap with coverage through `rollup-plugin-coverage`. See [rollup-plugin-coverage](https://gitlab.com/kflash/rollup-plugin-coverage) on how to
  activate sourcemap support.
- improved Karma integration

# v.0.10.5

- replaced `rollup-plugin-istanbul` with `rollup-plugin-coverage` to fix `ES2015` issues, and use latest `Istanbul`

# v.0.10.4

- added support for wallaby

# v.0.10.1

- made it compatible with sublime
- added code format options to `tsconfig.json`
- improved `TSLint`

# v.0.10.0

- major refactoring of the CI integration. Travis now runs on both OSX and Linux. AppVeyor runs on both the x86 and x64 platform.
- improved VSCode configuration
- verified to be used on handheld devices

# v.0.9.8

- moved config files into it's own folder

# v.0.9.7

- improved sourcemap support
- improved bundle time. Down to 2 ms
- improved bundle time. Down to 4 ms for browser tests
- added banner for development build
- updated NPM packages

# v.0.9.6

- fixed issue where the dist files instead of build files got deleted in VSCode
- updated readme

# v. 0.9.5

- improved server testing
- improved bundling
- general cleanup

# v. 0.9.4

- better integration with VSCode

# v. 0.9.2

- improved server testing with VSCode
- updated NPM packages

# v. 0.9.0

- VSCode integration
- Code can now be debugged inside VSCode
- Multiple VSCode tasks added
- Better TS 2.0 integration and supprt
- Loads of new TS 2.0 features
- BC! Server testing have changed, and the server test files are located in `test/node-tests`. Rollup isn't used anymore.
- readme updated

# v.0.8.8

- added support for the new TS 2.0 [TypeScript definitions](https://github.com/Microsoft/TypeScript/issues/9184)
__
# v.0.8.7

- updated npm packages

# v.0.8.5

- improved Travis
- updated dependencies

# v.0.8.4

- fixed vscode settings
- improved static typing
- improved the watch task
- updated readme

# v.0.8.2

- fixed issues with server testing
- cleaned up the bundle process

# v.0.8.1

- improved server testing
- shaved down the dependency tree

# v.0.8.0

- added server testing
- updated readme
- updated dependencies
- added AppVeyor CI support
-
# v.0.6.2

- improved VSCode support

# v.0.6.1

- fixed issues with TSC
- fixed typings issues

# v.0.5.7

- renamed tests folder to test so it can be found by mocha
- fixed issues with VSCode. Didn't pick up Mocha correctly'
- fixed issues with typings

# v.0.5.6

- updated dependencies.

# v.0.5.5

- updated dependencies.

# v.0.5.3

- fixed a bug

# v.0.5.0

- replaced `--module` with the new `--lib` param
- solved a watch issue

# v.0.4.11

- TypeScript watch task now support dead code elimination for ES6 modules

# v.0.4.10

- updated TSC with newest version
- updated readme

# v.0.4.9

- added new flags to TSC for bundling source files
- allow dead code elimination for ES6 modules
- updated TS to newest version

# v.0.4.8

- added .vscodeignore

# v.0.4.7

- improved linting
- fixed it so tests get linted before they are run
- improved Circle CI support

# v.0.4.6

- added Lolex to fake JavaScript timers
- fixed a bug with the unit tests

# v.0.4.5

- support for ECMAScript 2015 modules in Node.

# v.0.4.4

- added Sinon for test doubles
- minor improvements to Karma

# v.0.4.3

- improved TS configuration
- manually force to use latest TS 2.0 Pre version due to issues with @next
- manually force to use latest TSLint version due to issues with @next
- added script commands to remove dist and coverage folder

# v.0.4.0

- refactored unit testing
- added code coverage
- refactored bundling
- fixed readme
- updated dependencies

# v.0.3.6

- fixed bundle bugs

# v.0.3.2

- improved Travis CI. Added before and after script

# v.0.3.0

- improved `TSLint` rules. Equal to `Angular 2`
- refactored `package.json`
- refactored `README.md`

# v.0.2.8

- force linting of source files when running the build task

# v.0.2.5

- improved and refactored `Travis CI`
- added support for `Circle CI` to catch up with `Angular 2`
- removed a deprecated file
- updated dependencies

## v.0.2.4

- added a watch option, to watch the TC files and trigger recompilation on changes.
- improved error checking for TC
- JavaScript files are not allowed to be compiled

## v.0.2.3

- reduced the size of the workflow. Less configuration files

## v.0.2.2

- improved linting and added new rules
- updated readme

## v.0.2.0

- improved TS 2.0 Pre support
- renamed file extension on a couple of files

## v.0.1.24

- improved UT tests with Karma as the test runner

## v.0.1.23

- `karma.conf` converted to TypeScript

## v.0.1.22

- updated readme
- added mocha reporter to Karma

## v.0.1.21

- refactoried how unit testing works
- uses npn@types by default

## v.0.1.20

- updated dependencies

## v.0.1.9

- added support for environment variabels
- support development and production build. Production build get minified.
- added vscode settings
- updated dependencies
- added info about `async/await` in the `README.md`

## v.0.1.7

- activated more option in tsconfig.js for supporting `ES2016` features such as `async/await`

## v.0.1.6

- BC! Tests no longer runs on node.js, but uses `Karma`
- BC! Transpile by default down to `ES6`` with TS.
- added `Karma` + `Mocha` + `Chai` testing stack
- added `TDD support``
- TC config options moved into `package.json``
- use TypeScript for UT
- improved performance
- updated dependencies

## v.0.1.1

- added banner support for development build
- library name no longer hardcoded. Everything is taken from `package.json``.
- improved bundling
- updated dependencies
