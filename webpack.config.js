const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let prod = process.argv.indexOf('-p') !== -1;

let uglify = new webpack.optimize.UglifyJsPlugin({
    output: {
        comments: false
    }
});

let copy = new CopyWebpackPlugin([
    {
        from: path.join(__dirname, 'src/index.html'),
        to: path.join(__dirname, 'build/index.html')
    }
]);

let extractSass = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: [
        path.join(__dirname, '/src/main.jsx'),
        path.join(__dirname, '/src/styles/main.scss')
    ],
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
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ])
            }
        ]
    },
    devtool: prod ? 'undefined' : 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    },
    plugins: prod ? [
        uglify,
        copy,
        extractSass
    ] : [
        copy,
        extractSass
    ]
};
