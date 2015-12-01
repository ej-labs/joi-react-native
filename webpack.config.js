'use strict';

const webpack = require('webpack');

module.exports = {
  entry: './src/joi-browser.js',
  output: {
    libary: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // need to babelify joi, isemail, hoek, and topo's lib
        test: /\/node_modules\/(joi\/lib\/|isemail\/lib\/|hoek\/lib\/|topo\/lib\/)/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  node: {
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    // english locale is included, exclude the rest
    new webpack.IgnorePlugin(/locale/, /moment$/)
  ]
};
