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
}
