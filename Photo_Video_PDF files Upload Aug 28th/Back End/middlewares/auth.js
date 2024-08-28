const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = function ( req , res , next ) {

    const token = req.header("token");

    if(!token) return res.status(401).json( { msg : "Token not received "});

    try {

        const decodedToken = jwt.verify( token , process.env.JWT_SECRET );
        console.log(decodedToken);
        req.id = decodedToken.user.id;
        req.email = decodedToken.user.email;
        next();
    } catch (e) {

        console.error(e);
        res.status(500).send( { msg : `Token not Valid : ${e.toString()}` });
    }
};