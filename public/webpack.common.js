const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  //分离css
const webpack = require('webpack');
module.exports = {
    entry:{
        index:__dirname+"/index.js"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
       
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  }
                }
              },
              {
                  test:/\.css$/,
                  use:[
                    {
                      loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader'
                  ]
              },
              {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
              },
              {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            },
        ]
    },
    mode:'development'
}