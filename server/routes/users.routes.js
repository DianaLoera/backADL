const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller'); //es el que nos ayuda a hacer todos los procesos son puras rutas

router.get('/', userCtrl.getUsers);

router.post('/', userCtrl.createUser);

router.get('/:id', userCtrl.getUser);

router.put('/:id', userCtrl.editEmployee);

router.delete('/:id', userCtrl.deleteEmployee);

module.exports = router;