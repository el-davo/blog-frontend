'use strict';
let webpack = require('webpack');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let BabiliPlugin = require("babili-webpack-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BabelPlugin = require("babel-webpack-plugin");
let CompressionPlugin = require("compression-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'index'
  ],

  output: {
    path: './dist',
    filename: 'bundle-[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&minimize=true&localIdentName=[local]'
        })
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin({filename: 'style-[contenthash].css', allChunks: true}),
    new BabiliPlugin(),
    new BabelPlugin({
      test: /\.js$/,
      presets: [['es2015', {modules: false}], 'stage-0'],
      sourceMaps: false,
      compact: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compressor: {
        warnings: false,
        properties: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        unused: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        negate_iife: true,
        unsafe: true,
        hoist_vars: true,
        side_effects: true
      }
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.html$\.css$|/,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({template: 'index.ejs'}),
    new CopyWebpackPlugin([
      {from: 'app/img/**'},
      {from: 'manifest.yml'},
      {from: 'nginx.conf'}
    ], {}),
    new BundleAnalyzerPlugin()
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: false
};
