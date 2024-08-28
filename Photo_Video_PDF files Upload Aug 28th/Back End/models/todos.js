var mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema( {

    name : { type : String , required : true , maxLength :  50},
    status : { type : Boolean , required : true },
    description : { type : String , required : true  , maxLength :  100},
});

module.exports = mongoose.model("Todo" , AuthorSchema);