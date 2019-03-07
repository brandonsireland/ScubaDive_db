const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const dotenv = require('dotenv');

// god damn sass imports...
const bourbon = require('bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;
const normalize = require('node-normalize-scss').includePaths;

module.exports = () =>{
  const env = dotenv.config().parsed,
    envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});

  return {
    output: {
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(sa|sc)ss$/,
          use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  normalize, bourbon, neat
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|mp4|mov)$/,
          use: [
          'file-loader'
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
          filename: './main.css',
        }),
        new webpack.DefinePlugin(envKeys)
    ],
    devtool: 'source-map'
  }
};