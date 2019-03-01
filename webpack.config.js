const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');
const imageminSvgo = require('imagemin-svgo');

const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: ['./components/src/main.scss', './components/src/main.js']
  },
  mode: prodMode ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, './assets/dist'),
    filename: '[name].js'
  },
  // @see https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
  devtool: prodMode ? 'source-map' : 'eval',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new StyleLintPlugin({
      emitErrors: prodMode
    }),
    new ImageminPlugin({
      bail: prodMode,
      cache: true,
      imageminOptions: {
        plugins: [
          imageminSvgo({
            removeViewBox: false,
            removeDimensions: true,
            convertStyleToAttrs: true,
            cleanupIDs: true,
            cleanupAttrs: true
          })
        ]
      }
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      // SCSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },
      // IMAGES
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/images/generated',
              publicPath: './images/generated'
            }
          }
        ]
      },
      // FONTS
      {
        test: /\.woff2?/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts',
              publicPath: './fonts'
            }
          }
        ]
      },
      // VANILLA JAVASCRIPT
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              failOnWarning: prodMode,
              failOnError: prodMode
            }
          }
        ]
      }
    ]
  }
};
