function calcularIMC(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarIMC(imc) {
    let condicao;

    if(imc < 18.5)
        condicao = "Abaixo do peso";
    else if(imc >= 18.5 && imc < 25)
        condicao = "Peso normal";
    else if(imc >= 25 && imc < 30)
        condicao = "Acima do peso";
    else if(imc >= 30 && imc < 40)
        condicao = "Obeso";
    else
        condicao = "Obesidade grave";

    return condicao;
}

/*function main() {
    console.log("Cálculo do IMC");
    const peso = 88;
    const altura = 1.80;
    let imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
}

main();*/

// Criando uma função que se executa automaticamente

(function() {
    console.log("Cálculo do IMC");
    const peso = 88;
    const altura = 1.80;
    let imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
})();