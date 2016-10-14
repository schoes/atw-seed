/**
 * Created by svenschoeni on 11.10.16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var mainEntry = path.resolve(__dirname, 'src', 'app.ts');
var indexHtml = path.resolve(__dirname, 'src', 'index.html');
var dist = path.resolve(__dirname, 'dist');
var colors = require('colors');
module.exports = {
    //name of top level file
    entry: {
        app: mainEntry,
        vendor: ['lodash', 'jquery', 'moment', 'angular', 'angular-translate', 'angular-route']
    },
    //an object containing your output configuration
    output: {
        path: dist,
        filename: '[name].js',
        libraryTarget: 'var'
        // publicPath: path.resolve(__dirname, 'dist')
    },
    //resolve, specify what kind of file types can be processed without specifying a file extension
    resolve: {
        extensions: ['', '.ts', '.js', 'html', 'less']
    },
    plugins: [
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
                test: /\.ts$/,
                loader: 'ts-loader!tslint-loader'
            },
            {
                test: /\.js$/,
                loader: 'uglify-loader!ng-annotate-loader!jshint-loader!WebPackAngularTranslate.jsLoader()',
                exclude: /node_modules/
            },
            {
                test: /\.(ico|svg|jpg)/,
                loader: 'file-loader?name=[name].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.tpl\.html/,
                loader: 'raw-loader'
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            }
            // {
            //     test: /[^.tpl]\.html/,
            //     loader: 'file-loader?name=[name].[ext]',
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.(png|woff|woff2|eot|ttf)/,
            //     loader: 'url-loader?limit=100000&name=[name].[ext]'
            // }
        ]
    }
};