var express = require('express');
var app = express();

var removeUseStrict = require('remove-use-strict');

module.exports = function(content) {
    return removeUseStrict(content, {force: true});
};

app.get('/', function (req, res) {
  res.send('Hello Worldd 80!!!');
});

app.listen(80, function () {
  console.log('Example app listening ---  on port 80!');
});

