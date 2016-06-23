const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: './test/main.js',
	verbose: true,
	resolve: {
		extensions: ['', '.ts', '.tsx', 'js'],
		root: path.resolve('src')
	},
	module: {
		preLoaders: [
			{
				test: /\.ts(x?)$/,
				loader: 'tslint-loader',
				exclude: [path.resolve('node_modules')]
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					path.resolve('node_modules/rxjs'),
					path.resolve('node_modules/@angular')
				] }
		],
		loaders: [
			{
			    test: /\.ts(x?)$/,
				loader: 'babel-loader!awesome-typescript-loader'
			}
		],
		postLoaders: [
			{
				test: /\.(js|ts|tsx)$/, loader: 'istanbul-instrumenter-loader',
				include: path.resolve('src/'),
				exclude: [/node_modules/, /test/, /\.(e2e|browser|node)\.ts(x?)$/]
			},
			
		]
	},
	plugins: [],
	tslint: {
		emitErrors: false,
		failOnHint: false,
		resourcePath: 'src'
	},
	node: {
		global: 'window',
		process: false,
		module: false,
		clearImmediate: false,
		setImmediate: false
	}
};