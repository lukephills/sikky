const webpack = require('webpack');
const path = require('path');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: { 'sikky': './src/sikky.ts' },
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js'],
		root: path.resolve('src/'),
		modulesDirectories: ['node_modules']
	},
	module: {
		preLoaders: [ { test: /\.js$/, loader: 'source-map-loader', exclude: [] } ],
		loaders: [ {	test: /\.tsx?$/, loader: 'babel-loader!awesome-typescript-loader', exclude: [/\.(browser|node|e2e)\.ts$/] }
		],
		plugins: [
      // add all common plugins here
			new ForkCheckerPlugin(),
      new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          template: __dirname + '/index.html',
      }),
      // Promise and fetch polyfills
      new webpack.ProvidePlugin({
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      })
		]
	},
	node: {
		global: 'window',
		crypto: 'empty',
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
};