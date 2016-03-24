// Dependencies
var express = require('express');
var router = express.Router();
var app = express();

// Models
var Book = require('./models/book');

// Routes
Book.methods(['get','put','post','delete']);
Book.register(router, '/books');

module.exports = router;