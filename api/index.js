// Dependencies
var express = require('express');
var router = express.Router();


// Models
var Book = require('./models/book');
var Author = require('./models/author');

// Routes
Book.methods(['get','put','post','delete']);
Book.register(router, '/books');

Author.methods(['get','put','post','delete']);
Author.register(router, '/authors');

module.exports = router;