const webpackBaseConfig = require('./webpack.base.config');
var merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(webpackBaseConfig,{
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,"../src/client/index.html")
        })
    ]
})