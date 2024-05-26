const express = require('express');
const router = express.Router();
const service = require('../services/produtService');


router.get('/api', async (req, res)=>{
    try{
        const lista = await service.listar();
        res.status(200).send(lista);
    }catch(error){
        res.status(404).send('Erro ao tentar carregar os produtos. '+error);
    }
})

router.get('/api/:id', async (req, res) => {
    try{
        const produto = await service.listarId(req.params.id);
        res.status(200).send(produto);
    }catch(error){
        res.status(404).send('Erro ao tentar carregar o produto. '+error);
    }
})

router.put('/api/:id', async (req, res) => {
    try{
        const novosDados = {
            "nome": req.body.nome,
            "valor": req.body.valor,
            "urlImg": req.body.urlImg
        }
        const produto = await service.atualizar(req.params.id, novosDados);
        res.status(200).send(produto);
    }catch(error){
        res.status(404).send('Erro ao tentar atualizar os dados do produto. '+error);
    }
})

router.post('/api', async (req, res) => {
    try{
        const nome = req.body.nome;
        const valor = req.body.valor;
        const urlImg = req.body.urlImg;
        const novoProduto = {
            "nome": nome,
            "valor": valor,
            "urlImg": urlImg
          }
        const produto = await service.cadastrar(novoProduto);
        res.status(200).send(produto);
    }catch(error){
        res.status(401).send('Erro ao tentar cadastrar o produto. '+error);
    }
})

router.delete('/api/:id', async (req, res) => {
    try{
        const produto = await service.deletar(req.params.id);
        res.status(200).send(produto);
    }catch(error){
        res.status(404).send('Erro ao tentar deletar o produto. '+error);
    }
})

module.exports = router;