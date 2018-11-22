var debug = process.env.NODE_ENV !== "production"; // 是否是develop环境
var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清空输出目录
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 打包CSS文件

module.exports = {
    context: path.join(__dirname, 'src'), //源码目录， __dirname 工程目录
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.min.js"
    },
    plugins: [
        // new webpack.optimize.DedupePlugin(),
        new CleanWebpackPlugin('./dist' + '/*', { verbose: true}),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        debug ? function(){} : new webpack.optimize.UglifyJsPlugin( {mangle: false, sourcemap: false} ),
    ],
    module: {
        rules: [
            {   //让webpack可以解析es6
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ],
            },
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader'],
                }),
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        open: true,
        allowedHosts: [
            '*'
        ]
    }
};