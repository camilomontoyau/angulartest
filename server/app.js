// Dependencies
var express = require('express');
var	mongoose = require('mongoose');
var	bodyParser = require('body-parser');
var config = require('./config');
var api = require('../api'); //Customized API code

// MongoDB
mongoose.connect(config.mongodbConnection);



// Express
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Routes

app.use('/', express.static('public'));
app.use('/api/v0', api);
app.use('/swagger', express.static('swagger'));


// Start server
app.listen(config.appPort);
console.log("go to http://localhost:"+config.appPort);