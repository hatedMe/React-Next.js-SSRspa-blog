const path = require('path');
const glob = require('glob');
const webpack = require('webpack');


module.exports = {
  webpack: (config, {dev}) => {
    config.module.rules.push({
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }, {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }, {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules'].map((d) => path.join(__dirname, d)).map((g) => glob.sync(g)).reduce((a, c) => a.concat(c), [])
            }
          }
        ]
    });
    // config.plugins.push(
    //     new webpack.DefinePlugin({ 
    //         'process.env': {  
    //             'NODE_ENV': JSON.stringify('production')  
    //         }  
    //     }),  
    //     new webpack.optimize.DedupePlugin(),  
    //     new webpack.optimize.UglifyJsPlugin(), 
    //     new webpack.optimize.AggressiveMergingPlugin()
    // );
    return config
  }
}
