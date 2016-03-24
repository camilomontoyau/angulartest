// Dependencies
var express = require('express');
var router = express.Router();
var Validator = require('validatorjs');

// Models
var Book = require('./models/book');
var Author = require('./models/author');

// Routes
Book.methods(['get','put','post','delete']);

function validateBook(req, res, next) {
    var rules = {
        title: 'required',
        description:'required',
        image: 'required|url',
        authorId:'required'
    };

    var validation = new Validator(req.body, rules);

    if(validation.fails()===true){
        console.log(validation.errors.all());
        return res.status(409).json(validation.errors.all());
    }
    next();
}

Book.before('post',validateBook)
    .before('put', validateBook);

Book.register(router, '/books');

Author.methods(['get','put','post','delete']);

function validateAuthor(req, res, next) {
    var rules = {
        name: 'required',
        nationality:'required',
        authorId:'required'
    };

    var validation = new Validator(req.body, rules);

    if(validation.fails()===true){
        console.log(validation.errors.all());
        return res.status(409).json(validation.errors.all());
    }
    next();
}

Author.before('post',validateAuthor)
    .before('put', validateAuthor);

Author.register(router, '/authors');

module.exports = router;