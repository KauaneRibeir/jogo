const prompt = require ("prompt-sync")();
const {
    criar,
    atualizar,
    listar,
    remover,
} = require("./modulo.js")

while(true){
    console.log (`
    1. criar
    2. Atualizar
    3. Listar
    4. Remover
    5. Sair
    `)
    const opcao = +prompt ("Escolha uma opção: ")
    switch (opcao) {
        case 1:
        criar()   
            break;
        case 2:
        atualizar()
            break;
        case 3:
        listar()   
            break;
        case 4:
        remover()   
            break;
        case 5:
        process.exit()
            break;
        default:
        console.log("Opção invalida")
            break;
    }
}