const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para recibir datos en formato JSON
app.use(express.json());
app.use(cors());

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API HelpDesk funcionando correctamente con MongoDB'
  });
});

// Rutas de tickets
app.use('/tickets', ticketRoutes);

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conexión exitosa a MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error.message);
  });
