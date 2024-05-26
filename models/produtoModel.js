const mongoose = require('mongoose');
const {Schema} = mongoose;

const produtoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    }
})

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;