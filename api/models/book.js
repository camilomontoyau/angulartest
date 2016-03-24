/**
 * Created by camilo on 24/03/16.
 */
// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var bookSchema = new mongoose.Schema({
        title: {type:String, required:true},
        description: {type:String, required:true},
        image: {type:String, required:true},
        authorId: {type:String, required:true}
});


// Return model
module.exports = restful.model('Books', bookSchema);