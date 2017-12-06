var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './app/js/bundle.js'
  },
  module: {
      loaders: [
          { test: /js\/\.css$/, loader: 'babel-loader'},
          { test: /\.css$/,loader: 'css-loader',
            query: {
            presets: ['es2015', 'stage-0'],
            cacheDirectory: true
            }
        }
      ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/lodash/lodash.min.js', to:'app/js' },
        ])
    ]
};

