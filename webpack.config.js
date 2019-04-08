
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

const path = require('path');

module.exports = {
    mode: 'production',

    entry: {
        main: path.resolve('./src/js/main.js')
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./public/dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './public/index.html'
        // }),
        // new ExtractTextPlugin({
        //     filename: 'app.css'
        // })
    ]

};
