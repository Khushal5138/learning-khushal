var express = require('express');
var router = express.Router();
const carsController = require('../controllers/carsreg');

/* GET users listing. */
router.get('/', carsController.getCars);

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Cars Contact' });
});

router.post("/" , carsController.postCars);

router.delete("/:id" , carsController.deleteCars);

router.put("/:id" , carsController.putCars);

router.patch("/:id" , carsController.patchCars);

module.exports = router;
