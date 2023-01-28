

function Pessoa(nome) {
    this.nome = nome;
    this.teste = function() {
        console.log(this.nome + " teste concluido com sucesso");
    }
}

function Funcionario(nome, sobrenome, idade) {
    this.sobrenome = sobrenome,
    this.idade = idade,

    Pessoa.call(this, nome);
}

function Cargo (nome, cargo, nivel) {
    this.cargo = cargo,
    this.nivel = nivel,

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Paulo César" );
const pessoa2 = new Pessoa("gustavo vilaça" );

const funcionario1 = new Funcionario("Paulo César", " Paiva", "33", );
const funcionario2 = new Funcionario("Gustavo", " vilaça", "42", );

const cargo1 = new Cargo("Paulo César", "dev front-end", "junior", );
const cargo2 = new Cargo("Gustavo", "dev front-end", "pleno", );

pessoa1.teste();

console.log(pessoa1);
console.log(funcionario1);
console.log(cargo1);

