const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../preview/index.js'),
  output: {
    path: path.resolve(__dirname, '../preview'),
    filename: 'index.local.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../preview'),
    watchContentBase: true,
    compress: true,
    port: 13000
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve('./preview/index.html')
    })
  ]
}
