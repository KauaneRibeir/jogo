const prompt = require ("prompt-sync")();
const jogos = []

const criar =() => {
const nome = prompt(" Nome do jogo: ")
const ano = prompt(" Ano do lançamento: ")
const duracao = prompt(" Duraçao média em horas: ")
const preco = prompt(" Preço: ")
const estudio = prompt(" Qual é o estudio do jogo?: ")
const sequencia = prompt(" Qual é a a sequencia do jogo? ")

if(
    nome != "" && 
    ano >= 1962 && ano<= 2024 &&
    duracao > 0 &&
    preco == 0 &&
    estudio != "" &&
    ((sequencia > 0 < jogos.length) || jogos.length == 0)
){
    jogos.push({
        nome,
        ano,
        duracao,
        preco,
        estudio,
        sequencia
    })
    console.log ("Jogo cadastrado com sucesso!")
} else {
    console.log ("Dados invalidos.")
}
};

const listar = () => {
   if(jogos.length == 0){
    console.log ("Nenhum jogo encontrado")
   }else{
    jogos.forEach((jogo, indice) => {
    console,log(`
    ${indice + 1}. 
    Nome: ${jogo.nome}
    Ano: ${jogo.ano}
    Duraçao: ${jogo.duracao}
    Preço: ${jogo.preco}
    Estudio: ${jogo.estudio}
    Sequência: ${jogo.sequencia}
    `)
    })
   }
}



