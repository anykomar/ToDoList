'use strict';
const path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin').default,
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    fs = require('fs');

module.exports = {
    entry: {
        base: './src/js/index.js',
        index: './src/style/index.scss'
    },
    output: {
        path: path.resolve(__dirname, './static/js'),
        filename: '[name].bundle.js'
    },
    // if need chunks - please uncomment this
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     },
    // },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src/js'),
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {minimize: true}}
                ]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, './src/style/index.scss'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: true,
                            url: false
                        }
                    },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/index.bundle.css',
            allChunks: true
        }),
        new CleanWebpackPlugin(['./static/css', './static/fonts', './static/img', './static/js']),
        new CopyWebpackPlugin([
            {
                from: './src/fonts',
                to: '../fonts'
            },
            {
                from: './node_modules/@fortawesome/fontawesome-free-webfonts/webfonts',
                to: '../fonts/webfonts'
            },
            {
                from: './src/img',
                to: '../img'
            }
        ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            pngquant: {
                quality: '95-100'
            }
        })
    ]
};