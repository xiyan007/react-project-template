const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config.js');

const compiler = Webpack(webpackConfig);
const devServerOptions = {
  ...webpackConfig.devServer,
  open: true,
  // historyApiFallback: true, // 使用 h5 history api 时需要配置为true, 缺少此配置，页面刷新会出现页面 cannot get 错误
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();
