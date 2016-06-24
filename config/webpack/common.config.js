const webpack = require('webpack');
const path = require('path');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {

	 metadata: {
        title: 'Sikky',
        baseUrl: '/'
    },
	entry: {
       'sikky': './src/sikky.ts'
    },
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.json'],
		root: path.resolve('src/'),
		modulesDirectories: ['node_modules']
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					path.resolve('node_modules/rxjs'),
					path.resolve('node_modules/@angular'),
					path.resolve('node_modules/@ngrx'),
					path.resolve('node_modules/@angular2-material'),
        	]
			}
		],
		loaders: [
			{
        // load .ts and .tsx files
				test: /\.tsx?$/,
				loader: 'babel-loader!awesome-typescript-loader',
				exclude: [/\.(browser|node|e2e)\.ts$/]
			}
		],
		plugins: [
      // add all common plugins here
			new ForkCheckerPlugin(),
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