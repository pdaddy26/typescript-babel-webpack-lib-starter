const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: 'index.js',

    path: path.resolve(__dirname, 'lib'),

    library: 'typescript-babel-webpack-lib-starter',
    // Tells webpack to make a Universal Module Definition (umd)
    // so that it can run on both browser and server
    libraryTarget: 'umd',
    // There is a bug in webpack v4 when using umd
    // and using the library in node, it will try to use
    // the window global object. 
    // When running in the browser, webapck will mount the library 
    // to the window object
    // https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
    umdNamedDefine: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin()
  ]
};
