const path = require('path');

const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new htmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html',
        }),
        new cleanWebpackPlugin('build', { verbose: true }),
    ],
};
