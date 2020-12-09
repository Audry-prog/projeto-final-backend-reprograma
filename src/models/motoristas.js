const mongoose = require('mongoose');

const motoristasSchema = new mongoose.Schema({
    id: { type: Number },
    nome: { type: String },
    email: { type: String },
    telefone: { type: String },
    bairros: [{ type: String }],
    horarios: [{ type: String }],
    tipoVeiculo: { type: String },
    cidade: { type: String },
    estado: { type: String },
    despesaTrajeto: { type: String },
    ativo: { type: Boolean }
},{
    versionKey: false
});

const motoristas = mongoose.model('motoristas', motoristasSchema);

module.exports = motoristas;