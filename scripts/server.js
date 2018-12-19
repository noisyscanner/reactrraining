const fs = require('fs');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const {
  createCompiler,
  prepareProxy,
  prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');

const config = require('../config/webpack.config.dev');
const paths = require('../config/paths');
const createDevServerConfig = require('../config/webpackDevServer.config');

const useYarn = fs.existsSync(paths.yarnLockFile);



const createServer = (host, port) => {
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const urls = prepareUrls(protocol, host, port);
  const appName = require(paths.appPackageJson).name;

  // Create a webpack compiler that is configured with custom messages.
  const compiler = createCompiler(webpack, config, appName, urls, useYarn);
  // Load proxy config
  const proxySetting = require(paths.appPackageJson).proxy;
  const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
  // Serve webpack assets generated by the compiler over a web server.
  const serverConfig = createDevServerConfig(
    proxyConfig,
    urls.lanUrlForConfig
  );
  return new WebpackDevServer(compiler, serverConfig);
}

module.exports = createServer