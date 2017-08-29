const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
 entry: './src/app.js',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js'
 },
 devtool: 'cheap-module-source-map',
 module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
   ],
   
};