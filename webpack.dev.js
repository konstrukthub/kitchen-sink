const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const yaml = require('js-yaml');
const common = require('./webpack.common');

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

const { PORT } = loadConfig();

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].css'
  },

  devServer: {
    disableHostCheck: true,
    compress: true,
    clientLogLevel: 'debug',
    contentBase: [
      path.join(process.cwd(), './dist'),
    ],
    open: true,
    overlay: true,
    port: process.env.PORT || PORT,
    quiet: false,
    stats: 'none',
    watchContentBase: true,
  },


  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets/img',
        to: './assets/img'
      }
    ]),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});
