const Producto = require('../models/Producto');

exports.obtenerTodos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.obtenerUno = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.crear = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.actualizar = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        await producto.update(req.body);

        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.eliminar = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        await producto.destroy();

        res.json({
            mensaje: 'Producto eliminado correctamente'
        });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};