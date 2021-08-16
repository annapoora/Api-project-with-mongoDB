const mongoose = require("mongoose");

//create book Schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title:String ,
    pubDate:String ,
    language:String ,
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [String],
    id : Number
});


//make a model
const BookModel = mongoose.model("books",BookSchema);

//export module
module.exports = BookModel;