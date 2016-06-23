const { resolve } = require('path')
const glob = require('glob');
const webpack = require('webpack');

module.exports = {
	watch: true,
	entry: glob.sync('./test/browser-tests/**/*browser.ts').concat(glob.sync('./test/node-tests/**/*node.ts')),
	output: { filename: '__spec-build.js' },
	module: {
		preLoaders: [
			{
				test: /\.ts(x?)$/,
				loader: 'tslint-loader',
				exclude: [resolve('node_modules')]
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					resolve('node_modules/rxjs'),
					resolve('node_modules/@angular')
				] }
		],
		loaders: [
			{
				test: /\.ts(x?)$/,
				loader: 'babel-loader!awesome-typescript-loader',
				exclude:  [/\.(spec|e2e|async)\.ts$/]
			}
		]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function(req, res, proxyOptions) {
					return '/test/runner.html';
				}
			}
		}
	},
	plugins: [
		// By default, webpack does `n=>n` compilation with entry files. This concatenates
		// them into a single chunk.
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}