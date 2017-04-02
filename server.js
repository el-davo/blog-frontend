'use strict';

let cluster = require('cluster');
let cfenv = require('cfenv').getAppEnv();
let server = require('./server/server.js');

const port = 8000;

let app = require('./server/server.js');
app.listen(cfenv.isLocal ? port : cfenv.port);

module.exports = server;