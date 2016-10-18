const express = require('express');
const Promise = require('bluebird');

// Middleware
const morgan = require('morgan');
const parser = require('body-parser');

// const router = require('./routes.js');

const app = express();
app.set('port', 1337);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
// app.use('/classes', router);

// Serve the client files

app.listen(app.get('port'));
console.log('Listening on', app.get('port'));
