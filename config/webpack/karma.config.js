const { resolve } = require('path')

module.exports = {
	devtool: 'inline-source-map',
	entry: './test/main.js',
	verbose: true,
	resolve: {
		extensions: ['', '.ts', '.tsx', 'js'],
		root: resolve('src')
	},
	module: {
		preLoaders: [
			{
				// load .ts and .tsx files
				test: /\.tsx?$/,
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
			 // load .ts and .tsx files
			 test: /\.tsx?$/,
			 loader: 'babel-loader!awesome-typescript-loader'
			}
		],
		postLoaders: [
			{
				test: /\.(js|ts|tsx)$/, loader: 'istanbul-instrumenter-loader',
				include: resolve('src/'),
				exclude: [/node_modules/, /test/, /\.(e2e|browser|node)\.ts(x?)$/]
			}
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