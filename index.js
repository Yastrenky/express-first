const express = require('express');
const logger = require('morgan');
const path = require('path');


const app = express();
 //log request
 app.use(logger('dev'));

//static files
 app.use(express.static(path.join(__dirname, 'public')));

 // app.use(express.static(path.join(__dirname, 'public', 'css')));

app.listen(3000, () =>console.log('listening on port 3000'));
console.log('Try: ');
console.log('  GET /hello.txt');
console.log('  GET /js/app.js');
console.log('  GET /css/style.css');
