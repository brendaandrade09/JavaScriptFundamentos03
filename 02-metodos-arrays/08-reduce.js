const valores = [10, 20, 30, 40, 50];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(total); // percorre o array e acumula os valores

//map() transforma cada item
//filter() filtra item
//some() algum item atende ao critério?
//every() todos os itens atendem ao critério?
//reduce() acumula tudo em um resultado