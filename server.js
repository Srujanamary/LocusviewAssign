const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");
var cors = require("cors");
const app = express();
var People = require('./models/people');
const dbUrl = 'mongodb://' + 'localhost' + ':' + '27017' + '/' + 'people_db';
console.log(dbUrl);
mongoose.connect(dbUrl);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cors("*"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/express_backend', (req,res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});

var config = {
    'Content-Type':'application/json',
}

app.get('/starwar', function (req, res, next) {
    axios.get('https://swapi.dev/api/people/', config)
      .then(function (response) {
        People.insertMany(response.data.results,{ordered : false }, function (error, docs) {
          if (error) {
            res.status(500).send({ error: error});
          } else {
            res.send({ response: response.data.results });
          }
        });
      });
  });

    app.post('/character/detail', function (req, res) {
            People.findOne({ name: req.body.name }, function (err, data) {
                if (err) {
                res.status(500).send({ error: err });
            } else {
            res.send(JSON.stringify({ response: data }));
         }
        })
    });

