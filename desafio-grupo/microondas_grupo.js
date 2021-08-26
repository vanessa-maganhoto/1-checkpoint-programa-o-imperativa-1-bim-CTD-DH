 /*Aula 09 - 26/08/2021 - Checkpoint 
 Grupo 2 - Arnaldo Ramos, Diego Decrescenzo, João Victor Dutra, Rafael Watanabe, Vanessa Matos
 Objetico - Microodas */

let comida = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro:8
}

function microondas (comida, tempo){
    if (tempo < comida){
        console.log ('Tempo insuficiente!')
    } else if (tempo >= comida && tempo <= comida*2 ){
        console.log ('Prato está pronto!')
    } else if (tempo == comida*2 && tempo < comida*3){
        console.log ('Comida queimou!')
    } else if (tempo >= comida*3){
        console.log ('kabum!!')
    } else {
        console.log('Comida inexistente!')
    }
        
}
        
microondas(comida.feijao, 24)

microondas(comida.macarrao, 7)