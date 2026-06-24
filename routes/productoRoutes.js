const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', productoController.obtenerTodos);
router.get('/:id', productoController.obtenerUno);

router.post('/',
    authMiddleware,
    productoController.crear
);

router.put('/:id',
    authMiddleware,
    productoController.actualizar
);

router.delete('/:id',
    authMiddleware,
    productoController.eliminar
);

module.exports = router;