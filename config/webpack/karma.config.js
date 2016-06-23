const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: './test/main.js',
	verbose: true,
	resolve: {
		extensions: ['', '.ts', '.tsx', 'js'],
		root:  path.join(__dirname,'src')
	},
	module: {
		preLoaders: [
			{
				// load .ts and .tsx files
				test: /\.tsx?$/,
				loader: 'tslint-loader',
				exclude: [ path.join(__dirname,'node_modules')]
			},
			{
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					 path.join(__dirname,'node_modules/rxjs'),
					 path.join(__dirname,'node_modules/@angular')
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
				include:  path.join(__dirname,'src/'),
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