const alunos = [
    {nome: "Mat", nota: 3},
    {nome: "Lukz", nota: 8},
    {nome: "Link", nota: 10},
    {nome: "Ferdinand", nota: 6}
]
const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);