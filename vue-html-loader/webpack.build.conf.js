const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const baseConfig = require('./base.conf');

// module.exports = {
//     entry: __dirname + './src/index' ,
//     externals: {
//         swiper: 'swiper'
//     },
//     output: {
//         path: path.resolve(__dirname, '../dist'),
//         publicPath: '/',
//         filename: '[name].js',
//     },
//     devtool: '#source-map',
//     module: {
//         rules: [{
//             test: /\.(js|vue)$/,
//             loader: 'eslint-loader',
//             enforce: 'pre',
//             include: [
//                 resolve('src'), resolve('test')
//             ],
//             options: {
//                 formatter: require('eslint-friendly-formatter')
//             }
//         }, {
//             test: /\.vue$/,
//             loader: 'vue-loader',
//             options: {}
//         }, {
//             test: /\.js$/,
//             loader: 'babel-loader',
//             include: [resolve('src'), resolve('test')]
//         }]
//     },
//     resolve: {
//         extensions: [
//             '.js', '.vue', '.json'
//         ],
//         modules: [
//             resolve('src'), resolve('node_modules')
//         ],
//         alias: {
//             'swiper': 'swiper/dist/js/swiper.js'
//         }
//     }
// }



module.exports = {
    entry:  './src/index.js',
    output: {
        path: path.resolve( __dirname , './dist'),
        filename: 'build.js',
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:[
                    {
                        loader:'vue-loader'
                    }
                ]
            },{
                test: /\.js$/,
                loader: 'babel-loader'
                //include: [resolve('src'), resolve('test')]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html', // 源模板文件
        })
    ]
}

// module: {
//     loaders: [{
//         test: /\.vue$/,
//         exclude: /node_modules/,
//         loader: 'vue-loader'
//     }, {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         loader: 'style-loader!css-loader'
//     }, {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel'
//     }]
// },
// babel: {  
//     presets: ['es2015', 'stage-0'],  
//     plugins: ['transform-runtime']  
//   }