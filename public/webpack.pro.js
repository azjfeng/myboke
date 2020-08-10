const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack  = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const  {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = merge(common,{
    plugins:[
        new webpack.NamedModulesPlugin(),
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            filename: '../../app/common/index.html',
            template: './template.html',
        }),
    ],
    output:{
        filename:"[name].[hash].bundle.js",
        chunkFilename: '[name].[hash].bundle.js',
        path:path.resolve(__dirname,"dist")
    },
})