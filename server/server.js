'use strict';

let express = require('express');
let consign = require('consign');

let app = express();

consign({cwd: 'server', verbose: true})
  .include('middleware')
  .then('boot')
  .then('routers')
  .into(app);

module.exports = app;
