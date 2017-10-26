const path = require('path');

const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

let prod = process.argv.indexOf('-p') !== -1;

module.exports = {
    entry: path.join(__dirname, '/src/main.jsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: prod ? 'undefined' : 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },
    plugins: prod ? [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/index.html'),
                to: path.join(__dirname, 'build/index.html')
            }
        ])
    ] : [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/index.html'),
                to: path.join(__dirname, 'build/index.html')
            }
        ])
    ]
};
