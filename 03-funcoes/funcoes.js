// Declarando uma função

function teste() {
    console.log("Teste");
}

// Invocando a função
teste();

// Função com parâmetros
function sayMyName(name) {
    console.log("Seu nome é " + name);
}

// Invocando a função com um argumento
sayMyName("João");

// Declarando função com retorno

function sum(a, b) {
    return a + b;
}

// Invocando a função e armazenando o resultado
let result = sum(5, 3);
console.log("A soma é: " + result);

// Função simples para acréscimo de juros
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(90, 10));