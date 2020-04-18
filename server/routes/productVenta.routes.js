const express = require('express');
const router = express.Router();

const productVentaCtrl = require('../controllers/productVenta.controller'); //es el que nos ayuda a hacer todos los procesos son puras rutas

router.get('/', productVentaCtrl.getProductVenta);

router.post('/', productVentaCtrl.createProductVenta);

router.get('/:id', productVentaCtrl.getProductVenta);

router.put('/:id', productVentaCtrl.editProductVenta);

router.delete('/:id', productVentaCtrl.deleteProductVenta);

module.exports = router;