var path = require('path');
var webpack =  require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '/dist');


module.exports = {
  entry: path.join(__dirname, '/client/index.js' ),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('./css/style.css')
  ],

  devServer: {
    // contentBase: BUILD_DIR,
    port: 9001,
    compress: true,
    hot: true,
    open: true
  },
  
};