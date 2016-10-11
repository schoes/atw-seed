/**
 * Created by U112586 on 09.08.2016.
 */
var webpackConfig = require('../webpack.config');
module.exports = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        './node_modules/angular/angular.js',
        './node_modules/angular-mocks/angular-mocks.js',
        'test/**/*.spec.ts'
    ],

    preprocessors: {
        // add webpack as preprocessor
        'test/**/*.spec.ts': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
};