'use strict';
const fs = require('fs');

const DarkSky = require('dark-sky');
const forecast = new DarkSky('8b8f3aa22900a0803b951d23511a5d2b');

forecast
  .latitude(37.7860)
  .longitude(-122.4071)
  .units('us')
  .get()
  .then( res => {
    fs.writeFile('example.txt', JSON.stringify(res), err => {
      if (err) { return console.log(err); }
      console.log(res.currently);
      console.log("The file was saved!")
    });
  })
  .catch(err => {
    console.log(err)
  });
