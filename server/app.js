const express = require('express');
const Promise = require('bluebird');
const DarkSky = require('dark-sky');
const forecast = new DarkSky('8b8f3aa22900a0803b951d23511a5d2b');
// Middleware
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const app = express();
app.set('port', 1337);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());
app.use(cors());


app.listen(app.get('port'));
console.log('Listening on', app.get('port'));

app.post('/api', function (req, res) {
  let coords = req.body;

  forecast
    .latitude(coords.lat)
    .longitude(coords.long)
    .units('us')
    .get()
    .then( data => {
      res.send(JSON.stringify(data));
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.end('Sorry, your forecast didn\'t go through. Please try checking your latitude and longitude points.');
    });
});
