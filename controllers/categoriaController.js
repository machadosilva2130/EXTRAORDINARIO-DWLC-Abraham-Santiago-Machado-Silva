const Categoria = require('../models/Categoria');

exports.obtenerTodos = async (req, res) => {
    const categorias = await Categoria.findAll();
    res.json(categorias);
};

exports.obtenerUno = async (req, res) => {
    const categoria = await Categoria.findByPk(req.params.id);
    res.json(categoria);
};

exports.crear = async (req, res) => {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
};

exports.actualizar = async (req, res) => {
    const categoria = await Categoria.findByPk(req.params.id);

    if (!categoria) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    }

    await categoria.update(req.body);
    res.json(categoria);
};

exports.eliminar = async (req, res) => {
    const categoria = await Categoria.findByPk(req.params.id);

    if (!categoria) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    }

    await categoria.destroy();
    res.json({ mensaje: 'Categoría eliminada' });
};
