// Declarando um objeto literal

const pessoa = {
    nome: "João",
    idade: 30
};

console.log(pessoa.nome);

// Editando atributos do objeto

pessoa.altura = 1.75;

console.log(pessoa.altura);

// Deletando um atributo do objeto

delete pessoa.idade;

console.log(pessoa.idade); // undefined

// Criando uma função dentro do objeto

const carro = {
    nome: "Gol",
    ano: 2020,
    descrever: function () {
        console.log(`O carro é um ${this.nome} do ano ${this.ano}.`);
    }
}

carro.descrever();

// Acessando valores de um objeto de forma dinamica
const atributo = "nome";
console.log(carro[atributo]); // Gol