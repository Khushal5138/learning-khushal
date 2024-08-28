const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");


require("dotenv").config();


exports.createUser = async function  (req , res , next ) {

    let user = await User.findOne( { 
  
      email : req.body.email,
    });
    if( user ) {
  
      return res.status(400).json( {
        
        msg : "User already Exists!",
      });
    }
  
    const salt = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(req.body.password , salt );
  
    var userOb = new User ({ 
  
      username : req.body.username,
      email : req.body.email,
      password : encryptedPassword,
      isValid : req.body.isValid,
    });
  
    console.log(userOb);
    const result = await userOb.save();
    res.json( { status : 1 , data : result });
  };

  exports.index = [ auth ,async function(req, res, next) {
  

    let results  = await User.find();
    res.json(results);
} , ];

exports.login = async function (req , res) {

    const { email , password } = req.body;
    let user = await User.findOne({
        email : req.body.email,
    });

    if(!user){

        return res.status(400).json({

            msg : "User Does not Exist!",
        });
    }

    const passCorrect = await bcrypt.compare( password , user.password );
    if(!passCorrect){

        return res.status(400).json({

            msg : "Password is Incorrect!",
        })
    }

    const payload = {

        user : {

            id : user.id,
            email : email,
        } , 
    };

    jwt.sign(

        payload , process.env.JWT_SECRET ,
        {
    
            expiresIn : 3600,
        } ,
        ( err , token ) => {
    
            if (err) throw err;
            res.status(200).json({
    
                token,
            });
        },
    );
}

exports.getSpecificID = async function (req , res , next) {

    let result = await User.findById(req.params.id);
    res.json(result);
};