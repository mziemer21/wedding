var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var inlineFileSizeLimit = 8192;

module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "[name]-[hash].js"
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.join(__dirname, 'app')
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=" + inlineFileSizeLimit + "&mimetype=image/gif&name=images/[hash].[ext]"
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=" + inlineFileSizeLimit + "&mimetype=image/jpg&name=images/[hash].[ext]"
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=" + inlineFileSizeLimit + "&mimetype=image/png&name=images/[hash].[ext]"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=" + inlineFileSizeLimit + "&mimetype=image/svg+xml&name=images/[hash].[ext]"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=" + inlineFileSizeLimit + "&minetype=application/font-woff&name=fonts/[hash].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=" + inlineFileSizeLimit + "&minetype=application/octet-stream&name=fonts/[hash].[ext]"
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
  new webpack.BannerPlugin("If you want to know how this site is built checkout https://github.com/mziemer21/wedding"),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],

}