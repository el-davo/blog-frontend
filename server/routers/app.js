'use strict';

module.exports = function (app) {

  app.all('/*', function (req, res) {
    res.sendFile('./index.html', {root: `${__dirname}/../../dist`});
  });

  return this;
};
