var webpack = require('webpack');
var path = require('path');
var colors = require('colors');
var _ = require('lodash');

module.exports = {
    //name of top level file
    entry: {
        portal: '.'
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
    devtool: 'inline-source-map',
    ts: {
        compilerOptions: {
            target: 'es5',
            module: 'commonjs',
            declaration: false,
            noImplicitAny: false,
            removeComments: false,
            sourceMap: true,
            outDir: 'build',
            experimentalDecorators: true,
            strictNullChecks: false,
            skipLibCheck: true
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }

        ]
    }
};
