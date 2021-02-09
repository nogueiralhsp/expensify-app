const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test:/\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'bundle.js'
  },
};