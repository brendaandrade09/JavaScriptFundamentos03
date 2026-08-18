// function apresentar(nome){
//     console.log(`Olá, ${nome}!`);
// }
// apresentar("Beren");

function somar(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
}
somar(5, 8);

function apresentar(nome = "Visitante"){
    console.log(`Olá, ${nome}!`);
}
apresentar();
apresentar("Beren");