/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoCombustivel = 5.50;
const kmPorLitro = 10;
const distanciaKm = 150;

let litrosConsumidos = distanciaKm / kmPorLitro;
let custoTotal = litrosConsumidos * precoCombustivel;

console.log("O custo total da viagem é: R$ " + custoTotal.toFixed(2));