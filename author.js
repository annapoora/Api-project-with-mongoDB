const mongoose = require("mongoose");

//create Author Schema
const   AuthorSchema = mongoose.Schema({
    id: Number,
    names: String,
    books: [String]
});


//make a model
const AuthorModel = mongoose.model("authors",AuthorSchema);

//export module
module.exports = AuthorModel;