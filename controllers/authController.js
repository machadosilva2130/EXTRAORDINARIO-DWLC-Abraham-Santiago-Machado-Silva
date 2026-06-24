const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({
        where: { email }
    });

    if (!usuario) {
        return res.status(404).json({
            mensaje: 'Usuario no encontrado'
        });
    }

    const valido = await bcrypt.compare(
        password,
        usuario.password
    );

    if (!valido) {
        return res.status(401).json({
            mensaje: 'Contraseña incorrecta'
        });
    }

    const token = jwt.sign(
        { id: usuario.id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
};