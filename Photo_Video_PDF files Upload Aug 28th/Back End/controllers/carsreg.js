const Cars = require("../models/carsreg");
const bcrypt = require("bcrypt");

const Author = require("../models/authors");
const { validationResult , body } = require("express-validator");


exports.postCars = async function  (req , res , next ) {

    let car_user = await Cars.findOne( { 
  
      username : req.body.username,
    });
  
    let car_user2 = await Cars.findOne( { 
  
      email : req.body.email,
    });
    if( car_user || car_user2 ) {
  
      return res.status(400).json( {
        
        msg : "User already Exists in the Cars Rental Database!",
      });
    }
  
    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(req.body.password , salt );
  
    var carsOb = new Cars ({ 
  
      username : req.body.username,
      email : req.body.email,
      password : encryptedPassword,
      age : req.body.age,
      gender : req.body.gender,
      dob : req.body.dob,
      city : req.body.city,
      profession : req.body.profession,
    });
  
    console.log(carsOb);
    const result = await carsOb.save();
    res.json( { status : 1 , data : result });
  };

exports.getCars =  async function(req, res, next) {
  

    let results  = await Cars.find();
    res.json(results);
};

exports.putCars = async function ( req , res , next ) {

    let { username , email , password , age , gender , dob , city , profession } = req.body;
    // let authorOb =  new Author({ first_name });
    let result = await Cars.findByIdAndUpdate(req.params.id , { username , email , password , age , gender , dob , city , profession } );
    res.json(result);
};

exports.deleteCars = async function ( req , res , next ) {

    let idDelete = req.params.id;
      let result = await Cars.findByIdAndDelete(idDelete);
    res.json(result);

};

exports.patchCars = async function ( req , res , next ) {

    let { username , email , password , age , gender , dob , city , profession } = req.body;
    // let authorOb =  new Author({ first_name });
    let result = await Cars.findByIdAndUpdate(req.params.id , { username , email , password , age , gender , dob , city , profession } );
    res.json(result);
};