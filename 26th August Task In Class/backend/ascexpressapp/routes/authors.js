var express = require("express");
var router = express.Router();
const Author = require("../models/authors");
const { validationResult , body } = require("express-validator");


router.post("/" ,  [ body("first_name").isLength( { min :  3 } ).withMessage("Minimum length cannot be less than 3 characters") , body("last_name").isLength( { max : 10 } ).withMessage("Maximum Length cannot Exceed 10 characters") , async function (req , res , next) {

    const errors =  validationResult(req);
    if(errors.isEmpty()){

        let { first_name , last_name , dob , dod } = req.body;
        let authorOb = new Author({ first_name , last_name , dob , dod});
        let result = await authorOb.save();
        res.json(result);

    } else {

        res.send(errors);
    }
}]);

router.get("/" , async function (req , res , next) {

    let results  = await Author.find();
    res.json(results);
});

router.delete("/:id" , async function ( req , res , next ) {

    let idDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idDelete);
    res.json(result);

});

router.put("/:id" , async function ( req , res , next ) {

    let { first_name , last_name , dob , dod } = req.body;
    let authorOb =  new Author({ first_name });
    let result = await Author.findByIdAndUpdate(req.params.id , { first_name , last_name , dob , dod });
    res.json(result);
});

router.patch("/:id" , async function ( req , res , next ) {

    let { first_name , last_name , dob , dod } = req.body;
    let authorOb =  new Author({ first_name });
    let result = await Author.findByIdAndUpdate(req.params.id , { first_name , last_name , dob , dod });
    res.json(result);
});

module.exports =  router;