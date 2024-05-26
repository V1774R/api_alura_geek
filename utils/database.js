const mongoose = require('mongoose');

const url = "mongodb+srv://diegoTeste:132435@cluster0.zpyqpqu.mongodb.net/";
const conectar = async () => {
    await mongoose.connect(url)
    .then(()=>{
        console.log('Conexao com o banco realizada com sucesso!')
    })
    .catch(error => {
        console.log("Erro ao tentar conectar ao banco de dados. "+error)
    })
}

module.exports = {
    conectar
}
