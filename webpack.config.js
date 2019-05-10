var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};