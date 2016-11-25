/**
 * Created by svenschoeni on 11.10.16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var mainEntry = path.resolve(__dirname, 'src', 'app.ts');
var indexHtml = path.resolve(__dirname, 'src', 'index.html');
var dist = path.resolve(__dirname, 'dist');
var colors = require('colors');
module.exports = {
    //name of top level file
    entry: {
        app: mainEntry
    },
    //an object containing your output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'var',
        externals: ['lodash', 'jquery', 'moment', 'angular', 'b2c-utils', 'angular-translate', 'angular-route']
    },
    //resolve, specify what kind of file types can be processed without specifying a file extension
    resolve: {
        extensions: ['', '.ts', '.js', 'html', 'less']
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {allChunks: false}),
        new webpack.ProvidePlugin({ // jquery, lodash,angular and moment are now globaly available
            '$': 'jquery',
            '_': 'lodash',
            'moment': 'moment'
        }),
        new HtmlWebpackPlugin({
            template: indexHtml
        })
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(ico|svg|jpg)/,
                loader: 'file-loader?name=[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.tpl\.html/,
                loader: 'raw-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)/,
                loader: 'url-loader?limit=100000&name=[name].[ext]'
            }
        ]
    }
};