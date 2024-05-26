const database = require('../utils/database.js');
const Produto = require('../models/produtoModel.js');

const listar = async () => {
    await database.conectar();
    const lista = await Produto.find();
    return lista;
}

const listarId = async (id) => {
    const produto = await Produto.findById(id);
    return produto;
}

const cadastrar = async (novoProduto) => {
    await database.conectar();
    const conexao = new Produto(novoProduto);
    const produtoSalvo = await conexao.save();
    return produtoSalvo;
}

const atualizar = async (id, novosDados) => {
    database.conectar();
    const produto = await Produto.findByIdAndUpdate(id, novosDados, {new: true});
    return produto;
}

const deletar = async (id) => {
    database.conectar();
    const produto = await Produto.findByIdAndDelete(id);
    return produto;
}

module.exports = {
    listar,
    cadastrar,
    listarId,
    atualizar,
    deletar
}