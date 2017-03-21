let webpack = require('webpack');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let baseConfig = require('./webpack.config.base');
let WriteFilePlugin = require('write-file-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = merge(baseConfig, {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],

  output: {
    publicPath: `http://localhost:${port}/`
  },

  module: {
    rules: [
      {
        test: /\.global\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /^((?!\.global).)*\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[local]'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({ template: 'index.ejs' })
  ]

});