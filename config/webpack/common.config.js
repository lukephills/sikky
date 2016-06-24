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
<<<<<<< HEAD
				test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
					// these packages have problems with their sourcemaps
					path.resolve('node_modules/rxjs'),
					path.resolve('node_modules/@angular'),
					path.resolve('node_modules/@ngrx'),
					path.resolve('node_modules/@angular2-material'),
=======
				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
        test: /\.js$/,
				loader: 'source-map-loader',
				exclude: [
          // exclude the node dependencies
           path.join(__dirname, 'node_modules'),
          // and NPM packages that have problems with their sourcemaps
					 path.join(__dirname, 'node_modules/rxjs'),
					 path.join(__dirname, 'node_modules/@angular'),
					 path.join(__dirname, 'node_modules/@ngrx'),
					 path.join(__dirname, 'node_modules/@angular2-material'),
>>>>>>> origin/master
				]
			}
		],
		loaders: [
			{
<<<<<<< HEAD
				test: /\.ts(x?)$/, // ts and tsx
=======
        // load .ts and .tsx files
				test: /\.tsx?$/,
>>>>>>> origin/master
				loader: 'babel-loader!awesome-typescript-loader',
				exclude: [/\.(browser|node|e2e)\.ts$/]
			}
		],
		plugins: [
<<<<<<< HEAD
			new ForkCheckerPlugin()
=======
      // Do type checking in a separate process, so webpack don't need to wait.
			new ForkCheckerPlugin(),
      // Varies the distribution of the ids to get the smallest id length for often used ids.
			new webpack.optimize.OccurenceOrderPlugin(true)
>>>>>>> origin/master
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