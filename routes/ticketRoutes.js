const express = require('express');
const Ticket = require('../models/Ticket');

const router = express.Router();

// GET /tickets - Listar todos los tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los tickets',
      error: error.message
    });
  }
});

// GET /tickets/:id - Buscar un ticket por ID
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        mensaje: 'Ticket no encontrado'
      });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al buscar el ticket',
      error: error.message
    });
  }
});

// POST /tickets - Crear un nuevo ticket
router.post('/', async (req, res) => {
  try {
    const nuevoTicket = new Ticket({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      prioridad: req.body.prioridad,
      estado: req.body.estado || 'Abierto'
    });

    const ticketGuardado = await nuevoTicket.save();

    res.status(201).json({
      mensaje: 'Ticket creado correctamente',
      ticket: ticketGuardado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al crear el ticket',
      error: error.message
    });
  }
});

// PUT /tickets/:id - Actualizar un ticket
router.put('/:id', async (req, res) => {
  try {
    const ticketActualizado = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        prioridad: req.body.prioridad,
        estado: req.body.estado
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!ticketActualizado) {
      return res.status(404).json({
        mensaje: 'Ticket no encontrado'
      });
    }

    res.status(200).json({
      mensaje: 'Ticket actualizado correctamente',
      ticket: ticketActualizado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: 'Error al actualizar el ticket',
      error: error.message
    });
  }
});

// DELETE /tickets/:id - Eliminar un ticket
router.delete('/:id', async (req, res) => {
  try {
    const ticketEliminado = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticketEliminado) {
      return res.status(404).json({
        mensaje: 'Ticket no encontrado'
      });
    }

    res.status(200).json({
      mensaje: 'Ticket eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al eliminar el ticket',
      error: error.message
    });
  }
});

module.exports = router;