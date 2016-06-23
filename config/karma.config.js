const webpackConfig  = require('./webpack/karma.config');
const isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = function (config) {

	const configuration = {

		basePath: '..',
		files: [ { pattern: './test/main.js', watched: false } ],
		preprocessors: { './test/main.js': ['coverage', 'webpack', 'sourcemap'] },
		frameworks: ['mocha', 'chai', 'sinon', 'source-map-support'],
		client: { args: ['--grep', config.grep || ''] },
		excluded: [],
		webpack: webpackConfig,
		coverageReporter: {
			dir: 'coverage/',
			reporters: [
				{ type: 'text' },
				{ type: 'lcov' },
				{ type: 'text-summary' },
				{ type: 'json', subdir: '.', file: 'coverage-final.json' },
				{ type: 'html' }
			]
		},
		webpackMiddleware: {
			noInfo: true,
			stats: {
				// With console colors
				colors: true,
				// add the hash of the compilation
				hash: true,
				// add webpack version information
				version: false,
				// add timing information
				timings: true,
				// add assets information
				assets: true,
				// add chunk information
				chunks: true,
				// add built modules information to chunk information
				chunkModules: false,
				// add built modules information
				modules: false,
				// add also information about cached (not built) modules
				cached: true,
				// add information about the reasons why modules are included
				reasons: false,
				// add the source code of modules
				source: true,
				// add details to errors (like resolving log)
				errorDetails: true,
				// add the origins of chunks and chunk merging info
				chunkOrigins: true,
				// Add messages from child loaders
				children: false
			}
		},
		reporters: ['mocha', 'coverage'],
		specReporter: {
			// maxLogLines: 5, // limit number of lines logged per test
			suppressErrorSummary: true, // do not print error summary
			suppressFailed: false, // do not print information about failed tests
			suppressPassed: false, // do not print information about passed tests
			suppressSkipped: true // do not print information about skipped tests
		},
		mochaReporter: { output: 'autowatch' },
		port: 9876,
		captureTimeout: 60000,
		browserDisconnectTimeout : 60000,
		browserDisconnectTolerance : 3,
		browserNoActivityTimeout : 60000,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true
	}

	if (isCI) {
		configuration.reporters.push('coveralls');
	}

	config.set(configuration);
}