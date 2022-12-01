const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const resolve = (dir) => path.resolve(process.cwd(), dir);

const devConfig = {
  mode: 'development',
  entry: {
    common: ['react', 'react-dom', 'redux', 'react-redux'],
    app: ['./src/index.js'],
  },
  output: {
    path: resolve('dist'),
    chunkFilename: `scripts/[name].[hash:8].min.js`,
    publicPath: '',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@pages': resolve('src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: { '@primary-color': '#0073c9' },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|xlsx)(\?.*)?$/,
        loader: 'url-loader',
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  // https://webpack.js.org/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-project-template',
      inject: true,
      template: resolve('src/index.template.html'),
    }),
    // ProvidePlugin 可以自动加载模块，不需要手动使用 import /require 引入模块
    new Webpack.ProvidePlugin({ 
      React: 'react',
    }),
    // 可视化 webpack 输出的文件大小
    // new BundleAnalyzerPlugin() 
  ],
};

// smp 可以获取每个 loader 和 plugin 的耗时
// const smp = new SpeedMeasurePlugin();
// const webpackConfig = smp.wrap(devConfig)

module.exports = devConfig;
