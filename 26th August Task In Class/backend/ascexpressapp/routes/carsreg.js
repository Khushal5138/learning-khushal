var express = require('express');
var router = express.Router();
const Cars = require("../models/carsreg");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  

    let results  = await Cars.find();
    res.json(results);
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Cars Contact' });
});

router.post("/" , async function  (req , res , next ) {

  let car_user = await Cars.findOne( { 

    username : req.body.username,
  });
  if( car_user ) {

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
});

router.delete("/:id" , async function ( req , res , next ) {

    let idDelete = req.params.id;
    let result = await Cars.findByIdAndDelete(idDelete);
    res.json(result);

});

router.put("/:id" , async function ( req , res , next ) {

    let { username , email , password , age , gender , dob , city , profession } = req.body;
    // let authorOb =  new Author({ first_name });
    let result = await Cars.findByIdAndUpdate(req.params.id , { username , email , password , age , gender , dob , city , profession } );
    res.json(result);
});

router.patch("/:id" , async function ( req , res , next ) {

    let { username , email , password , age , gender , dob , city , profession } = req.body;
    // let authorOb =  new Author({ first_name });
    let result = await Cars.findByIdAndUpdate(req.params.id , { username , email , password , age , gender , dob , city , profession } );
    res.json(result);
});

module.exports = router;
