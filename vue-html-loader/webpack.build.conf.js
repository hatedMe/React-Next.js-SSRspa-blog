const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base.conf');

module.exports = {
    entry: __dirname + './src/index' ,
    externals: {
        swiper: 'swiper'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    devtool: '#source-map',
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [
                resolve('src'), resolve('test')
            ],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {}
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }]
    },
    resolve: {
        extensions: [
            '.js', '.vue', '.json'
        ],
        modules: [
            resolve('src'), resolve('node_modules')
        ],
        alias: {
            'swiper': 'swiper/dist/js/swiper.js'
        }
    }
}