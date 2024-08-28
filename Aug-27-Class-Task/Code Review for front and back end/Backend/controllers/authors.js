const Author = require("../models/authors");
const auth = require("../middlewares/auth");
const { validationResult , body } = require("express-validator");


exports.createAuthor = [ body("first_name").isLength( { min :  3 } ).withMessage("Minimum length cannot be less than 3 characters") , body("last_name").isLength( { max : 10 } ).withMessage("Maximum Length cannot Exceed 10 characters") , async function (req , res , next) {

    const errors =  validationResult(req);
    if(errors.isEmpty()){

        let { first_name , last_name , dob , dod } = req.body;
        let authorOb = new Author({ first_name , last_name , dob , dod});
        let result = await authorOb.save();
        res.json(result);

    } else {

        res.send(errors);
    }
}];

exports.getAuthor = [ auth , async function (req , res , next) {

    let results  = await Author.find();
    res.json(results);
} , ];

exports.putAuthor = async function ( req , res , next ) {

    let { first_name , last_name , dob , dod } = req.body;
    let authorOb =  new Author({ first_name });
    let result = await Author.findByIdAndUpdate(req.params.id , { first_name , last_name , dob , dod });
    res.json(result);
};

exports.deleteAuthor = async function ( req , res , next ) {

    let idDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idDelete);
    res.json(result);

};

exports.patchAuthor = async function ( req , res , next ) {

    let { first_name , last_name , dob , dod } = req.body;
    let authorOb =  new Author({ first_name });
    let result = await Author.findByIdAndUpdate(req.params.id , { first_name , last_name , dob , dod });
    res.json(result);
};

