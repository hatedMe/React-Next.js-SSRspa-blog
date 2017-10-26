const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/app.js'
    },
    plugins: [
        new HtmlWebpackPlugin({}),
        new CleanWebpackPlugin(['dist'])
    ],
    module: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: 'babel-loader'
                }
            ],
            exclude: [path.resolve(__dirname, 'node_modules')]
        }
    ],
    devServer: {
        open: true,
        port: 9000
    }
};
