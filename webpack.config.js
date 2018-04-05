/** @prettier */

const DIST_DIR = 'dist';
const PORT = 3000;

const webpack = require('webpack');
const merge = require('webpack-merge');
const pkg = require('./package.json');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const IS_DEVS = process.env.NODE_ENV === 'development';

const plugins = [];

if (!IS_DEVS) {
  plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        output: {
          comments: 'some'
        }
      }
    }),
    new webpack.BannerPlugin({
      banner: `${pkg.name} v${pkg.version} ${pkg.author} | ${pkg.license}`
    })
  );
}

const config = {
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, DIST_DIR)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  devServer: {
    contentBase: path.resolve(__dirname, DIST_DIR),
    port: PORT
  },
  devtool: IS_DEVS ? 'source-map' : false,
  optimization: {
    minimize: false
  },
  plugins: plugins
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/js/plugin.js'),
    output: {
      filename: 'vue-curve-text.min.js',
      libraryTarget: 'window',
      library: 'VueCurveText'
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/js/CurveText.vue'),
    output: {
      filename: 'vue-curve-text.js',
      libraryTarget: 'umd',
      library: 'vue-curve-text',
      umdNamedDefine: true
    }
  })
];
