const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
//const precss = require('precss');


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const extractMiniCss = new MiniCssExtractPlugin({
  filename: "[name].css",
});


module.exports = {
  //devtool: 'eval',
  entry: {
    contact: [ './src/entrypoint/contact.js' ] , // , './src/scss/index.scss'
    index: [ './src/entrypoint/index.js' ] , //  , './src/scss/index.scss'

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    extractMiniCss,
  ],
  module: {
    rules: [
      // {       // this seems to change nothing
      //   test: /\.js?$/,
      //   loader: 'babel-loader',
      //
      // },

      { // this correctly extract the css
        test: /\.s?css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
      },

      // { // this doesn't extract the scss
      //   test: /\.scss$/, use: [MiniCssExtractPlugin.loader,
      //     'css-loader',  //'postcss-loader',
      //     'sass-loader' ,
      //   ]
      // },


    ]
  }
};
