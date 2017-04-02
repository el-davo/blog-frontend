let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let open = require("open");
let config = require('./webpack.config.dev');

let jsonServer = require('json-server');
let server = jsonServer.create();
let router = jsonServer.router('db.json');
let middlewares = jsonServer.defaults();

let marked = require('marked');

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/users/login', (req, res) => {
  res.send({ id: '9a56bebe-153b-415a-aefb-d1f26c73239b', ttl: 500, created: new Date().getUTCDate(), userId: '6be5b25b-b527-4d25-9c1a-1856dd241204' })
});

server.post('/articles/markdown', (req, res) => {
  res.send({ markdown: { markdownOutput: marked(req.body.markdown) } });
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  inline: true
}).listen(3000, 'localhost', err => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening on port 3000');
  open("http://localhost:3000");
});

server.use(middlewares)
server.use(router)
server.listen(3001, function () {
  console.log('JSON Server is running')
})