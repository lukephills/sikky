const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const WebpackMd5Hash = require('webpack-md5-hash');
const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    debug: false,
    devtool: 'source-map',
    output: {
        path: path.resolve('dist'),
        publicPath: path.resolve('/'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map',
        chunkFilename: '[chunkhash].[id].chunk.js',
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': { 'ENV': JSON.stringify(ENV) }
        }),
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