const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// // images
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozJpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

const fs = require('fs');
const yaml = require('js-yaml');

const { PATHS, BASEHREF } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

function getBaseHref() {
  return process.env.NODE_ENV === 'production' ? BASEHREF.prod : BASEHREF.dev
}

function getMinificationOptions() {
  if (process.env.NODE_ENV === 'production') {
    return {
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      useShortDoctype: true
    }
  } else {
    return false;
  }
}

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, PATHS.dist)
  },

  module: {
    rules: [
      {
        test: /\.((gif)|(png)|(jpe?g)|(svg))(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'src/assets/img')
        ],
        loader: 'file-loader',
        options: {
          name(file) {
            if (process.env.NODE_ENV === 'development') {
              return 'assets/img/[name].[ext]';
            }
            return 'assets/img/[hash].[ext]';
          },
        }
      },

      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { cacheDirectory: true },
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  'node_modules/foundation-sites/scss',
                  'node_modules/motion-ui/'
                ]
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      bail: false, // Ignore errors on corrupted images
      cache: true,
      imageminOptions: {
        // Lossless optimization with custom option
        // Feel free to experement with options for better result for you
        plugins: [
          imageminMozJpeg({
            progressive: true,
            quality: 70
          }),
          imageminOptipng({
            optimizationLevel: 5
          }),
          imageminSvgo({
            removeDoctype: true,
            removeComments: true,
            convertShapeToPath: false,
            convertStyleToAttrs: true,
            cleanupNumericValues: {
              floatPrecision: 1
            }
          })
        ]
      }
    }),
    new HtmlWebpackPlugin({
      template: './.tmp/index.html',
      inject: false,
      base: {
        href: getBaseHref()
      },
      minify: getMinificationOptions()
    })
  ]
};
