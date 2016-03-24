/**
 * Created by camilo on 24/03/16.
 */
// Dependencies

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var authorSchema = new mongoose.Schema({
    name: {type:String, required:true},
    nationality: {type:String, required:true},
    authorId: {type:String, required:true}
});


// Return model
module.exports = restful.model('Authors', authorSchema);