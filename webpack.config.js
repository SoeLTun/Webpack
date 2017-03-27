var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            }
            // { test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader']) } // loaders: 'style-loader!css-loader' -- old way
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Project',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ]
}