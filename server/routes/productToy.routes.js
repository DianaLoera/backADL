const express = require('express');
const router = express.Router();

const productToyCtrl = require('../controllers/productToy.controller');

router.post('/getProductToy', productToyCtrl.getProductToys);

router.post('/', productToyCtrl.createProductToy);

router.get('/:id', productToyCtrl.getProductToy);

router.put('/:id', productToyCtrl.editProductToy);

router.delete('/:id', productToyCtrl.deleteProductToy);

module.exports = router;