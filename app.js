/**
 * Created by U112586 on 23.05.2016.
 */
const PORT = process.env.PORT || 8000;
var express = require('express');
var app = express();
var proxy = require('./proxy');

app.use('/app', express.static('./dist'));
proxy(app, 'i');


app.listen(PORT, function () {
    console.log('App is listening on port %s!', PORT);
});