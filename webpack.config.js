import path from 'path';
import webpack from 'webpack';
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    // 'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js' )
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'react-hot-loader/webpack'
        }]
      },

      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      
      {
        test: /\.scss$/,

        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },

    ]
  },
  
  resolve: {
    extensions: ['.js']
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('./css/style.css')
  ],
  
};