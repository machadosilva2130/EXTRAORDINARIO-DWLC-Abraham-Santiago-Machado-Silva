require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const Producto = require('./models/Producto');
const Categoria = require('./models/Categoria');
const Usuario = require('./models/Usuario');

const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);

// Relaciones
Producto.belongsTo(Categoria);
Categoria.hasMany(Producto);

// Conexión
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conexión exitosa a PostgreSQL');
    })
    .catch(err => {
        console.error('❌ Error de conexión:', err);
    });

// Crear tablas
sequelize.sync({ alter: true })
    .then(() => {
        console.log('✅ Tablas creadas correctamente');
    })
    .catch(err => {
        console.error('❌ Error al crear tablas:', err);
    });

app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor ejecutándose en puerto ${process.env.PORT}`);
});
