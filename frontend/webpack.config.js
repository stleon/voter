'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry:  {
    application: [
      path.resolve(__dirname, 'assets', 'sass', 'application.sass'),
      path.resolve(__dirname, 'assets', 'js', 'application.js'),
    ]
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '../',
    filename: '[name]/[name].js'
  },
  resolve: {
    moduleDirectories: ['node_modules'],
    root: path.resolve(__dirname, 'assets'),
    alias: {
      _fonts: 'fonts',
      _images: 'images',
      _scss: 'scss',
      _js: 'js',
    },
  },
  module: {
    loaders: [{
      test: /\.(eot|woff|woff2|ttf)$/,
      loader: 'url?name=fonts/[hash].[ext]&limit=5000',
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url?name=images/[hash].[ext]&limit=5000',
    }, {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('css!autoprefixer-loader?browsers=last 5 version!sass?sourceMap&indentedSyntax'),
    }],
  },

  debug: true,

  watch: true,

  devtool: 'source-map',

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name]/[name].css', {allChunks: true}),
    new AssetsPlugin({
      filename: 'static.json',
      path: path.resolve(__dirname, 'static'),
      update: true,
      prettyPrint: true,
    })
  ]

};