const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const jsRules = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: { loader: 'babel-loader' }
}
const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader']
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
    module: { rules: [ jsRules, cssRules ] },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: './index.html'
      }),
      
    ]

  }
}