 const path = require('path');
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/main.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Puc',
       filename: 'index.html',
       template:'./public/index.html',
       minify: { 
        removeComments: true, 
        collapseWhitespace: true, 
        minifyCSS: true
      }
     })
   ],
   output: {
     filename: '[name].js',
     path: path.resolve(__dirname, 'dist')
   },
   module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
 };