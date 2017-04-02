let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let BabelPlugin = require("babel-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let BabiliPlugin = require("babili-webpack-plugin");
let ImageminPlugin = require('imagemin-webpack-plugin').default;
let baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: [
    'babel-polyfill',
    './app/index'
  ],

  output: {
    publicPath: './',
    filename: 'bundle-[chunkhash].js',
  },

  module: {
    rules: [
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanWebpackPlugin(['dist'], {}),
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabelPlugin({
      test: /\.js$/,
      presets: [['es2015', {modules: false}], 'stage-0'],
      sourceMaps: false,
      compact: true
    }),
    new ExtractTextPlugin({filename: 'style-[contenthash].css', allChunks: true}),
    new HtmlWebpackPlugin({template: 'index.ejs'}),
    new BabiliPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      {from: 'app/img/**'}
    ], {}),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.html$|\.css$/,
      threshold: 0,
      minRatio: 0
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      },
      optipng: {
        optimizationLevel: 9
      }
    })
  ]

});