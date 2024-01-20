var express = require('express');
var application = express();
application.get('/', function (req, res) {
  res.send('Hello World.. from nodejs!');
});
application.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
