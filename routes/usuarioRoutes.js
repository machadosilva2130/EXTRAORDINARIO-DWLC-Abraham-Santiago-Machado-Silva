const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.obtenerTodos);

router.get('/:id', usuarioController.obtenerUno);

router.post('/', usuarioController.crear);

router.put('/:id', usuarioController.actualizar);

router.delete('/:id', usuarioController.eliminar);

module.exports = router;