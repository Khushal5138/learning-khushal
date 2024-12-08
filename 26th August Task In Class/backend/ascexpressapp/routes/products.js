var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Products Contact' });
});

router.get('/product/:id/:name' , function (req , res , next) {

    let id = req.params.id;
    let name = req.params.name;
    let price  =  req.params.price;

    res.json({ id : id , name : name , price : price });
});

router.post('/product' , function (req , res , next) {

    const { id , name , price } = req.body;

    res.json({ id : id , name : name , price : price });
});


module.exports = router;
