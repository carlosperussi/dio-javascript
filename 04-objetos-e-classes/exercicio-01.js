/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedio;
    tipoCombustivel;

    constructor(marcaParam, corParam, gastoMedioParam, tipoCombustivelParam) {
        this.marca = marcaParam;
        this.cor = corParam;
        this.gastoMedio = gastoMedioParam;
        this.tipoCombustivel = tipoCombustivelParam;
    }
}

function calcularGastoViagem(carroObj, distanciaKm, precoCombustivel) {
    let litrosConsumidos = distanciaKm / carroObj.gastoMedio;
    let custoTotal = litrosConsumidos * precoCombustivel;
    return custoTotal;
}

(function() {
    const newCar = new Carro("Fiat", "Vermelho", 10, "Flex");
    const precoGasolina = 7.50;
    const distanciaKm = 150;

    console.log("O custo total da viagem será de R$ " + calcularGastoViagem(newCar, distanciaKm, precoGasolina).toFixed(2).replace(".", ",") + " considerando o tipo de combustível " + newCar.tipoCombustivel);
})();






/*if(tipoCombustivel === "Gasolina") {
    precoCombustivel = precoGasolina;
    kmPorLitro = 10;
} else if(tipoCombustivel === "Etanol") {
    precoCombustivel = precoEtanol;
    kmPorLitro = 7;
}

let litrosConsumidos = distanciaKm / kmPorLitro;
let custoTotal = litrosConsumidos * precoCombustivel;

console.log("O custo total da viagem é: R$ " + custoTotal.toFixed(2) + " utilizando " + tipoCombustivel);*/