const webpack = require('webpack');
const { resolve } = require('path')
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
		extensions: [ '', '.ts', '.tsx', '.js', '.jsx' ],
		root: resolve('src/'),
		modulesDirectories: ['node_modules']
	},
	module: {
		preLoaders: [
			{
				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
        test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
          // exclude the node dependencies
          resolve('node_modules'),
          // and NPM packages that have problems with their sourcemaps
					resolve('node_modules/rxjs'),
					resolve('node_modules/@angular'),
					resolve('node_modules/@ngrx'),
					resolve('node_modules/@angular2-material'),
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
      // Do type checking in a separate process, so webpack don't need to wait.
			new ForkCheckerPlugin(),
      // Varies the distribution of the ids to get the smallest id length for often used ids.
			new webpack.optimize.OccurenceOrderPlugin(true)
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