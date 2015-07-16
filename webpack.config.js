var webpack = require('webpack');
var ip = require('ip');
var path = require('path');

var defineOptions = {
  // Static assets serve from this address.
  'PUBLIC_PATH': process.env.PUBLIC_PATH || '/assets/',

  // Debugging variable to be used in if block. Statements in this block will be
  // removed when running `npm run build`
  '__DEV__': JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),

  // This is mainly used by node modules to remove their dead codes when
  // compress and compiling codes
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
  }
};

module.exports = {
  cache: true,
  entry: './src/main.js',
  output: {
    path: './dist/assets/__build__/',
    filename: 'bundle.js',
    publicPath: defineOptions.PUBLIC_PATH + '__build__/'
  },
  resolve: {
    root: path.resolve(__dirname, 'src')
  },
  module: {
    loaders: [
      { test: /\.(gif|svg|woff|ttf|eot|otf)$/, loader: "file" },
      { test: /\.(png|jpe?g)$/, loader: 'url?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:["ie >= 9", "last 2 version"]}!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true' },
      { test: /\.css$/, loader: 'style!css!autoprefixer?{browsers:["ie >= 9", "last 2 version"]}' }
    ]
  },
  devServer: {
    contentBase: './dist/',
    host: process.env.HOST || ip.address(),
    port: process.env.PORT || 8080
  },
  plugins: [new webpack.DefinePlugin(defineOptions)]
};
