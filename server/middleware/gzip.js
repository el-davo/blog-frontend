'use strict';

let gzipStatic = require('connect-gzip-static');

module.exports = function (app) {

  const TIMEOUT = 86400000 * 300;

  app.use(gzipStatic('./dist', {maxAge: TIMEOUT}));

  return this;
};
