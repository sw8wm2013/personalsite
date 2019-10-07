const path = require('path');
const express = require('express');

module.exports = {
  entry: {
    src: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
        },
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: path.resolve(__dirname, '/build/'),
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
    hot: true,
  },

};
