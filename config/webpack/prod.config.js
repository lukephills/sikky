const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { resolve } = require('path')
const commonConfig = require('./common.config.js');
const WebpackMd5Hash = require('webpack-md5-hash');

const environment = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    debug: false,
    devtool: 'source-map',
    output: {
        path: resolve('dist'),
        publicPath: resolve('/'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map',
        chunkFilename: '[chunkhash].[id].chunk.js',
    },
    plugins: [
        new WebpackMd5Hash(),
        // avoid code duplication that may happen when several modules require the same module for instance
        new webpack.optimize.DedupePlugin(),
         // set environment global variable used in the js code
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(environment),
        }),
        // uglify the js code
        new webpack.optimize.UglifyJsPlugin({
            dead_code: true,
            unused: true,
            compress: {
                screw_ie8: true,
                keep_fnames: true,
                drop_debugger: false,
                dead_code: false,
                unused: false
            }
        })
    ],
    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: 'src'
    }, node: {
        global: 'window',
        crypto: 'empty',
        process: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
});