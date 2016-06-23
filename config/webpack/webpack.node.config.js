const webpack = require('webpack');
const glob = require('glob');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    noInfo: true,
    resolve: {
        root: path.resolve('src'),
        extensions: ['', '.ts', '.tsx', '.js'],
        modulesDirectories: ['node_modules'],
        alias: { sinon: path.resolve('/node_modules/sinon/pkg/sinon.js') }
    },
    module: {
        preLoaders: [

            { test: /\.ts(x?)$/, loader: 'tslint-loader', exclude: [ path.resolve('node_modules') ] },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    path.resolve('node_modules/rxjs'),
                    path.resolve('node_modules/@angular')
                ]
            }
        ],
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'babel-loader!awesome-typescript-loader',
                exclude:  [/\.(e2e|async)\.ts(x?)$/]
            }
        ]
    }
}