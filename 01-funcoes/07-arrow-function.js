function somarTradicional(a, b){
    return a+b;
}
const somarAnonima = function (a, b){
    return a+b;
}
console.log(somarAnonima(5,15));
console.log(somarTradicional(10,5));

const somarArrowFunction = (a, b) => {
    return a + b;
}

const somarArrowFunction2 = (a, b) => a + b;

console.log(somarArrowFunction(3,2));
console.log(somarArrowFunction2(10,20));
