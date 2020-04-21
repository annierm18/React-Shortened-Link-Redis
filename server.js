const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + '/dist/react-redux-router'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/react-redux-router/index.html');
})
app.listen(port);

console.log("server started");