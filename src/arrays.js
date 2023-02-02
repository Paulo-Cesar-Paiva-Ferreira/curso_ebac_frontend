//Exercício do modulo 25
const alunos3 = [
    {nome: 'Jose', nota: 6},
    {nome: 'Maria', nota: 5},
    {nome: 'Claudia', nota: 7},
    {nome: 'Felipe', nota: 9},
    {nome: 'Andre', nota: 4},
];

function filtraAlunosAprovados(item) {
    return item.nota >= 6;
}

const alunosAprovados = alunos3.filter(filtraAlunosAprovados);

console.log(alunosAprovados);