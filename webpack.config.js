const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// god damn sass imports...
const bourbon = require('bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;
const normalize = require('node-normalize-scss').includePaths;

module.exports = {
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
    ],
    devtool: 'source-map'
  };