const mongoose = require("mongoose");

//create publication Schema
const PublicationSchema = mongoose.Schema({
    
    id: Number,
    names: String,
    books: [String]
});


//make a model
const PublicationModel = mongoose.model("publications",PublicationSchema);

//export module
module.exports = PublicationModel;