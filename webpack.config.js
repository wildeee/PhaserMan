const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'assets', to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      title: 'PACMAN',
      template: 'src/index.html',
    }),
  ],
};
