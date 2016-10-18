const express = require('express');
const Promise = require('bluebird');

const DarkSky = require('dark-sky');
const forecast = new DarkSky('8b8f3aa22900a0803b951d23511a5d2b');

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

app.get('/', function(req, res) {
  forecast
    .latitude(37.7860)
    .longitude(-122.4071)
    .units('us')
    .get()
    .then( data => {
      res.send(data.currently);
      res.end();
    })
    .catch(err => {
      console.log(err)
    });
});
