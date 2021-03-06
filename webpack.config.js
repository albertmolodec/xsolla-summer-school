module.exports = function (env, argv) {
  const path = require('path');
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
  const StyleLintPlugin = require('stylelint-webpack-plugin');

  const isProduction = argv.mode === 'production';
  const isDevelopment = argv.mode === 'development';

  const commonCssLoaders = ['css-loader', 'postcss-loader'];

  const componentCssLoaders = ['to-string-loader'].concat(commonCssLoaders);

  if (isProduction) {
    componentCssLoaders.push('clean-css-loader');
  }

  const config = {
    mode: argv.mode,
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: isProduction,
              removeComments: true,
              collapseWhitespace: true,
              conservativeCollapse: false,
              collapseInlineTagWhitespace: true,
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: isProduction ? '[name].[contenthash].[ext]' : '[name].[ext]',
            },
          },
        },
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 65000,
              name: isProduction ? '[name].[contenthash].[ext]' : '[name].[ext]',
            },
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/favicon.png',
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? './[name].[contenthash].css' : './[name].css',
      }),
      new StyleLintPlugin({
        configFile: '.stylelintrc',
        context: 'src',
        files: '**/*.css',
        failOnError: false,
        quiet: true,
      }),
    ],
  };

  if (isProduction) {
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
    };
  }

  if (isDevelopment) {
    config.watch = true;
    config.devtool = 'eval';
    config.devServer = {
      contentBase: path.join(__dirname, 'dist'),
      port: 4000,
    };
  }

  return config;
};
