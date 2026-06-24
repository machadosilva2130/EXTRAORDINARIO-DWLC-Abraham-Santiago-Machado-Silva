const Usuario = require('../models/Usuario');

exports.obtenerTodos = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
};

exports.obtenerUno = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json(usuario);
};

exports.crear = async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.json(usuario);
};

exports.actualizar = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
    }

    await usuario.update(req.body);

    res.json(usuario);
};

exports.eliminar = async (req, res) => {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
    }

    await usuario.destroy();

    res.json({
        mensaje: 'Usuario eliminado'
    });
};