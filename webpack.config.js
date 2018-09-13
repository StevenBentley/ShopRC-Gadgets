const path = require("path")
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')

module.exports = {
context: __dirname,
mode: 'development',
entry: {
  'main': './assets/js/index.js',
  'footer': './assets/footer/index.js',
  'navbar-cart': './assets/navbar-cart/index.js',
  'shop': './assets/shop/index.js'
},
devtool: 'cheap-module-source-map',

output: {
    path: path.resolve(__dirname, './assets/bundles'),
    filename: "[name].js",
},

plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new BundleTracker({filename: './webpack-stats-footer.json'}),
],

module: {
    rules: [
      { test: /\.css$/, loader: 'style-loader!file-loader' },
      { test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
},
}
