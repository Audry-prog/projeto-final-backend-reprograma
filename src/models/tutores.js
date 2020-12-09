const mongoose = require('mongoose');

const tutoresSchema = new mongoose.Schema({
    id: { type: Number },
    nomeTutor: { type: String },
    nomePet: { type: String },
    porte: { type: String },
    telefone: { type: String },
    email: { type: String },
    senha: { type: String }
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

const tutores = mongoose.model('tutores', tutoresSchema);

module.exports = tutores;