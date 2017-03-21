var marked = require('marked');

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

console.log(marked('```js\n console.log("hello"); \n```'));
// Outputs: <p>I am using <strong>markdown</strong>.</p>