var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');
/* GET users listing. */
router.get('/', userController.index );

router.get("/:id" , userController.getSpecificID );

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Users Contact' });
});

router.post("/" , userController.createUser );

router.post("/login" , userController.login );


module.exports = router;
