var express = require('express');
var path = require('path');
var proxy = require('./proxy');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');
var colors = require('colors');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8000;
var publicPath = path.resolve(__dirname, './dist');

// We only want to run the workflow when not in production
var _webpack = function () {
    var itteration = 1;
    // add watch mode only in dev environemnt
    webpackConfig.watch = true;
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new Error('webpack:build', err);
        }
        var logStatement = '---------ITTERATION:' + itteration + '---------';

        console.log(colors.green(logStatement));
        console.log(stats.toString("minimal"));
        itteration += 1;
    });
};

var _startExpressServer = function () {
    app.use('/portal', express.static(publicPath));
    app.listen(port, function () {
        console.log(colors.yellow('Server running on port:', port));
    });
};

if (!isProduction) {
    if (process.argv.length <= 2) {
        proxy(app, 'w');
    }
    else {
        proxy(app, process.argv[2]);
    }
    _webpack();
}

_startExpressServer();


