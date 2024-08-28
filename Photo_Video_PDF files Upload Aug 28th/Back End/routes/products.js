var express = require('express');
var router = express.Router();
const productsController = require('../controllers/products');

/* GET products listing. */
router.get('/', productsController.getProduct);

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Products Contact' });
});

router.get('/:id' , productsController.getSpecificProduct );

router.get('/search/:name' , productsController.getSpecificProductByName );

router.get('/searchAvailability/:availability' , productsController.getSpecificProductByAvailability );

router.get('/searchPrice/:price' , productsController.getSpecificProductByPrice );

router.get('/' , productsController.getProduct );

router.post('/' , productsController.postProduct );

router.delete('/:id' , productsController.deleteProduct);

router.put('/:id' , productsController.putProduct);

router.patch('/:id' , productsController.patchProduct);


module.exports = router;
