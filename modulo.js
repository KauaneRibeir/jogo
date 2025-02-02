const prompt = require ("prompt-sync")();
const jogos = []
const validarindice = indice => indice >= 0 ||  indice > jogos.length 
const atualvalidar = indice => {
    if(jogos.length == 1 
        && indice ==0) {
            return false
        }
        return true
}

const modelo = (indice) => {
const nome = prompt(" Nome do jogo: ")
const ano = prompt(" Ano do lançamento: ")
const duracao = prompt(" Duraçao média em horas: ")
const preco = prompt(" Preço: ")
const estudio = prompt(" Qual é o estudio do jogo?: ")
let sequencia = -1;
  if (
    listar() && atualizaoValida(indice)) {
    sequencia =
      prompt("Qual é a sequência do jogo? Digite 0 se não houver") - 1;
  }}
    

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

const criar =() => {
const jogo = modelo(indice);
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

    const indice = prompt("Qual o indice que deseja atualizar? ") - 1;
    const jogo = modelo();
if(jogo != undefined &&
    validarindice(indice)){
    jogos[indice] = jogo
    console.log("Jogo atializado com sucesso!")
}else{
    console.log("Falha ao atualizar.")
}
};

const remover = () => {
    if(!listar()){
        return
    }
const indice = prompt("Qual indice deseja remover? ") -1 
if (validarindice(indice)){
    jogos.splice(indice, 1)
    console.log ("Jogo removido com sucesso!")
}else{
    console.log("Falha na remoção")
}
};

module.exports = {
criar,
atualizar,
listar,
remover
}




// const prompt = require("prompt-sync")();

// const jogos = [];

// const atualizaoValida = indice => {
//   if(jogos.length == 1 && indice == 0) {
//     return false
//   }
//   return true
// }
// const validarIndice = (indice) => indice >= 0 && indice < jogos.length;

// const modelo = (indice = -1) => {
//   const nome = prompt("Nome do jogo: ");
//   const ano_lancamento = prompt("Ano de lançamento: ");
//   const duracao = prompt("Duração média em horas: ");
//   const preco = prompt("Preço: ");
//   const estudio = prompt("Qual o estudio do jogo? ");
//   let sequencia = -1;
//   if (
//     listar() && atualizaoValida(indice)) {
//     sequencia =
//       prompt("Qual é a sequência do jogo? Digite 0 se não houver") - 1;
//   }

//   if (
//     nome != "" &&
//     ano_lancamento >= 1962 &&
//     ano_lancamento <= 2024 &&
//     duracao > 0 &&
//     preco == 0 &&
//     estudio != "" &&
//     ((sequencia >= -1 && sequencia < jogos.length) || jogos.length == 0)
//   ) {
//     return {
//       nome,
//       ano_lancamento,
//       duracao,
//       preco,
//       estudio,
//       sequencia,
//     };
//   } else {
//     console.log("Dados inválidos");
//   }
// };

// const criar = () => {
//   const jogo = modelo();

//   if (jogo != undefined) {
//     jogos.push(jogo);
//     console.log("Jogo cadastrado com sucesso");
//   }
// };

// const listar = () => {
//   if (jogos.length == 0) {
//     console.log("Nenhum jogo encontrado");
//     return false;
//   } else {
//     jogos.forEach((jogo, indice) => {
//       console.log(`
//                 ${indice + 1}. 
//                 Nome: ${jogo.nome}
//                 Ano de Lancamento: ${jogo.ano_lancamento}
//                 Duração: ${jogo.duracao}
//                 Preço: ${jogo.preco}
//                 Estudio: ${jogo.estudio}
//                 Sequência: ${jogo.sequencia}
//                 `);
//     });

//     return true;
//   }
// };

// const atualizar = () => {
//   if (!listar()) {
//     return;
//   }

//   const indice = prompt("Qual o indice que deseja atualizar? ") - 1;

//   const jogo = modelo(indice);

//   if (jogo != undefined && validarIndice(indice)) {
//     jogos[indice] = jogo;

//     console.log("Jogo atualizado com sucesso");
//   } else {
//     console.log("Falha na atualização");
//   }
// };

// const remover = () => {
//   if (!listar()) {
//     return;
//   }

//   const indice = prompt("Qual indice você deseja remover? ") - 1;

//   if (validarIndice(indice)) {
//     jogos.splice(indice, 1);
//     console.log("Jogo removido com sucesso");
//   } else {
//     console.log("Falha na remoção");
//   }
// };

// module.exports = {
//     criar,
//     atualizar,
//     listar,
//     remover
// }