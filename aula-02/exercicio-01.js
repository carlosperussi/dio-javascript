/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo do combustível que está no seu carro;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoGasolina = 5.50;
const precoEtanol = 3.30;
let kmPorLitro = 0;
const distanciaKm = 150;
let tipoCombustivel = "Etanol";
let precoCombustivel;

if(tipoCombustivel === "Gasolina") {
    precoCombustivel = precoGasolina;
    kmPorLitro = 10;
} else if(tipoCombustivel === "Etanol") {
    precoCombustivel = precoEtanol;
    kmPorLitro = 7;
}

let litrosConsumidos = distanciaKm / kmPorLitro;
let custoTotal = litrosConsumidos * precoCombustivel;

console.log("O custo total da viagem é: R$ " + custoTotal.toFixed(2) + " utilizando " + tipoCombustivel);