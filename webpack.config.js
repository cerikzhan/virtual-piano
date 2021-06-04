const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExstractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const devServ = (isDevelopment) => !isDevelopment ? {} : {
  devServer: {
    open: true,
    hot: true,
    port: 8000
  },
};

const esLintPlugin = (isDevelopment) => isDevelopment ? [] : [new ESLintWebpackPlugin({ extensions: ['js'] })];

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|mp3)$/i,
        type: 'asset/resource',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExstractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: true
        }
      }
    ] 
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    ...esLintPlugin(development),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExstractPlugin({
      filename: 'style.css'
    })
  ],
  ...devServ(development),
});