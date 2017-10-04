const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '');
const APP_DIR = path.resolve(__dirname, 'src/client/');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'app.css',
  allChunks: true
});

const config = {
  entry: APP_DIR + '/index.react.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = {
  entry: config.entry,
  output: config.output,
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/, loader: "flowtype", exclude: /node_modules/
    //   }
    // ],
    // rules: [
    //   {
    //     test: require.resolve('./src/client/index.react.js'),
    //     use: ""
    //   }
    // ],
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.s?css$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new FlowBabelWebpackPlugin(),
    new sassLintPlugin({ glob: 'src/**/*.s?(a|c)ss' })
  ]
};
