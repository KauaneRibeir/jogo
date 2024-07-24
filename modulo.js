const prompt = require ("prompt-sync")();
const jogos = []

const modelo = () => {
const nome = prompt(" Nome do jogo: ")
const ano = prompt(" Ano do lançamento: ")
const duracao = prompt(" Duraçao média em horas: ")
const preco = prompt(" Preço: ")
const estudio = prompt(" Qual é o estudio do jogo?: ")
let sequencia = -1
if(listar()){
sequencia = prompt(" Qual é a a sequencia do jogo? Digit 0 se não houver.") -1;   
}


if(
    nome != "" && 
    ano >= 1962 && ano<= 2024 &&
    duracao > 0 &&
    preco == 0 &&
    estudio != "" &&
    ((sequencia > 0 < jogos.length) || jogos.length == 0) 
){
return {
    nome,
    ano,
    duracao,
    preco,
    estudio,
    sequencia
};
} else {
    console.log ("Dados invalidos.")
}
};

const criar =() => {
const jogo = modelo();
if (jogo!= undefined){
jogos.push(jogo);
console.log("Jogo cadastrado com sucesso!")
}
};

const listar = () => {
   if(jogos.length == 0){
    console.log ("Nenhum jogo encontrado")
    return false
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
    return false
   }
}
const atualizar = () => {
    if(!listar()){
        return
    }
    const indice =prompt("Qual o indice que deseja atualizar? ") - 1;
    const jogo = modelo()
if(jogo != undefined &&
    indice >= 0 &&
    indice > jogos.length 
){ 
    jogos[indice] = jogo
    console.log("Jogo atializado com sucesso!")
}else{
    console.log("Falha ao atualizar.")
}
};





