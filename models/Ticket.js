const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true
    },
    descripcion: {
      type: String,
      required: true,
      trim: true
    },
    categoria: {
      type: String,
      required: true,
      enum: ['Red', 'Hardware', 'Software']
    },
    prioridad: {
      type: String,
      required: true,
      enum: ['Alta', 'Media', 'Baja']
    },
    estado: {
      type: String,
      required: true,
      enum: ['Abierto', 'En Progreso', 'Cerrado'],
      default: 'Abierto'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (doc, ret) => {
        delete ret._id;
      }
    }
  }
);

module.exports = mongoose.model('Ticket', ticketSchema);