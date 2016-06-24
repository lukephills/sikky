const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path')
const commonConfig = require('./common.config.js');

const environment = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
	debug: true,
	devtool: 'cheap-eval-source-map',
	output: {
		path: path.resolve('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
	},
	plugins: [
		// set environment global variable used in the js code
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(environment),
		})
	],
	tslint: {
		emitErrors: false,
		failOnHint: false,
		resourcePath: 'src'
	}
});