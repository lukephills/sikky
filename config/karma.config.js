const buble = require('rollup-plugin-buble');
const istanbul = require('rollup-plugin-coverage');
const TSPlugin = require('rollup-plugin-typescript');
const multiEntry = require('rollup-plugin-multi-entry').default;
const TSConfig = require('../tsconfig.json');
const TypeScript = require('typescript');

const isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = (config) => {
	config.set({
    basePath: '..',
		files: [
      { pattern: 'test/browser-tests/**/*.ts', included: true, watched: true },
		],
		preprocessors: {
			'test/browser-tests/**/*.ts': ['rollup', 'sourcemap']
		},
		rollupPreprocessor: {
			rollup: {
				plugins: [
					multiEntry(),
					TSPlugin(
						// 'rollup's typescript plugin are using TS v. 1.8 by default.
						// To be able to use latest TS 2.0 Pre version, we need to overwrite it because.
						// the plugin doesn't automatically pick up the installed TS in 'mode_modules'
						Object.assign(TSConfig.compilerOptions, {
							typescript: TypeScript, // TS 2.0 Pre
							module: 'es6',
							declaration: false
						})
					),
					buble({
						exclude: 'node_modules/**'
					}),
					istanbul({
						include: ['**/*.ts'], // we need this to avoid the multi-entry plugin from throwing errors
						ignore: ['**/node_modules/**', '**/test/**'],
						exclude: ['test/**/*.ts']
					})
				]
			},
			bundle: {
				sourceMap: true
			}
		},
		coverageReporter: {
			dir: 'coverage',
			reporters: [
				{ type: 'text' },
				{ type: 'lcov' },
				{ type: 'text-summary' }
			]
		},

		logLevel: config.LOG_INFO,

		// change Karma's debug.html to the mocha web reporter
		client: {
			mocha: {
				reporter: 'html'
			}
		},
		colors: true,
		autoWatch: false,
		browsers: ['Chrome'], // Alternatively: 'PhantomJS'
		frameworks: ['mocha', 'chai', 'sinon-chai'],
		reporters: ['mocha', 'coverage'],
		captureTimeout: 6000,
    concurrency: 4,
		browserDisconnectTimeout: 10000,
		browserDisconnectTolerance: 2,
		browserNoActivityTimeout: 30000,
	});

	if (isCI) {
		config.captureTimeout = 0;
		// Push 'coveralls' to the reporters array if Travis or Circle are running
		config.reporters.push('coveralls');
	}
};
