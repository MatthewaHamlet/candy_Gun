const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/build',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8080,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
            new HtmlWebpackPlugin ({
                filename: 'index.html',
                template: './src/index.html',
                chunks: []
            }),
            new HtmlWebpackPlugin({
                filename:'landing.html',
                template: 'src/landing.html',
                chunks: []
            }),
        new webpack.ProvidePlugin({
            $: "jquery",  
            jQuery: "jquery" 
        })
    ]
   
}