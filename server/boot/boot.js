'use strict';

let express = require('express');

module.exports = function (app) {

  const TIMEOUT = 86400000 * 300;

  app.use('/', express.static('dist/', {maxAge: TIMEOUT}));

  return this;
};
