/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const devProxy = {
  '/blogApi': {
    target: 'http://www.wangkaitao.com',
    pathRewrite: { '^/blogApi': '/' },
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq: (proxyReq, req, res) => {
      const targetUrl = `${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`;
      if (req?.headers?.origin) {
        const sourceUrl = `${req?.headers?.origin}${req.originalUrl}`;
        console.log(`${sourceUrl} proxy to ======> ${targetUrl}`);
        console.log(req?.headers['store-ua']);
      }
      console.log(`proxyReq.getHeader('store-ua')`, proxyReq.getHeader('store-ua'));
      console.log(`proxy to ======> ${targetUrl}`);
    },
  },
};

const port = parseInt(process.env.PORT, 10) || 1001;
const hostname = '127.0.0.1';
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev,
  hostname,
  port,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    const { createProxyMiddleware } = require('http-proxy-middleware');
    Object.keys(devProxy).forEach(function (context) {
      server.use(context, createProxyMiddleware(devProxy[context]));
    });

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
