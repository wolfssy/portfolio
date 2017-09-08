'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));


app.get('/', (request, response) => response.sendFile('mobile.html', {root: './public'}));


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
