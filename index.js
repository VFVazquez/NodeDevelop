const express = require('express');
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

var cowsay = require('cowsay')
var app = express();

app.get('/mensaje', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/txt');
    res.end(
        cowsay.say({
          text: req.query.mensaje,
          e: 'oO',
          T: 'U '
        })
    );
});

app.listen(port, function() {
	console.log('Servidor http://' + hostname + ':' + port + '/');
});