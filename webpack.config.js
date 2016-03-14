var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var inlineFileSizeLimit = 8192;

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
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
        loader: 'style!css'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit='+inlineFileSizeLimit+'&name=[name]-[hash].[ext]'
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
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    port: 8081,
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}