const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsRules = {
  test: /\.m?js$/i,
  exclude: /node_modules/,
  use: { loader: 'babel-loader' }
}

module.exports = () => {
  return {

    entry : './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      clean: true
    },
    resolve: { extensions: ['.js'] },
    module: { rules: [ jsRules ] },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
      })
    ]

  }
}