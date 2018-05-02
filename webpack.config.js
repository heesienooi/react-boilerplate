const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    // Automatically resolve without file extension when importing.
    // E.g. import File from '../path/to/file'
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // Remove clutters from dist.
    new CleanWebpackPlugin(['dist']),

    // Generate index.html file which serve webpack bundles. This is especially
    // useful for webpack bundles that include a hash in filename which changes
    // every compilation.
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
};
