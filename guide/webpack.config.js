const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'ooni-components': path.join(__dirname, '../components')
    }
  },
 	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.svg$/,
        //exclude: /^\.\/images/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
}
