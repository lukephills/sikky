const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {

debug: true,
devtool: 'inline-source-map',
output: {
    path: path.resolve('dist/'),
    publicPath: 'http://localhost:9045/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
    
},
 plugins: [
     new webpack.DefinePlugin({
         'ENV': JSON.stringify(ENV),
         'process.env': {
         'ENV': JSON.stringify(ENV)
    }
     })
 ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
    devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    outputPath: path.resolve('dist'),
    port: 9045,
    host: 'localhost',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});