const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path')
const commonConfig = require('./common.config.js');
const BundleTracker = require('webpack-bundle-tracker');
const environment = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {
	debug: false,
	devtool: 'source-map',
	output: {
		path: path.resolve('dist/'),
		filename: '[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js',
    sourceMapFilename: '[name].map'

	},
	plugins: [
    new BundleTracker({filename: './webpack-stats-production.json'}),
    // pass options to uglify
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
    }),
		// set environment global variable used in the js code
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(environment),
		}),
		// minifies your code
		new webpack.optimize.UglifyJsPlugin({
			compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
        sourceMap: true
		}),
      // removes duplicate modules
      new webpack.optimize.DedupePlugin(),
	],
	tslint: {
		emitErrors: true,
		failOnHint: true,
		resourcePath: 'src'
	}
});