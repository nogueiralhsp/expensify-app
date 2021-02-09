const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-env']
      },
    }, {
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        },
      ]
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin({
      }),
    ],
  },

};