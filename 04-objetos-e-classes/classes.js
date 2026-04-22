// Criando uma classe
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const newPerson = new Pessoa();
newPerson.nome = "Maria";
newPerson.idade = 25;

newPerson.descrever(); // Meu nome é Maria e tenho 25 anos.

// Criando outra classe com construtor
class Carro {
    modelo;
    ano;

    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
}

const newCar = new Carro("Civic", 2019);
console.log(newCar.modelo); // Civic
console.log(newCar.ano); // 2019

// Funções recebendo objetos como parâmetros
function apresentarPessoa(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);
}

apresentarPessoa(newPerson); // Olá, meu nome é Maria e tenho 25 anos.