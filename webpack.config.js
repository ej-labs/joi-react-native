'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/joi-react-native.js',
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'joi-react-native.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(joi\/lib|isemail\/lib|hoek\/lib|topo\/lib))/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    global: true,
    Buffer: true,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  }
};
