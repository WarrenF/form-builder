const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.APP_VERSION': JSON.stringify(process.env.npm_package_version)
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve('./preview/index.html')
    })
  ]
}
