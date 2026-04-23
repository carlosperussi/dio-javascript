// 1) Crie um programa que dado um número, ele imprima a tabuada

function calcularTabuada(numeroParam) {
    for(let i = 1; i <= 10; i++) {
        const resultado = numeroParam * i;
        console.log(`${numeroParam} x ${i} = ${resultado}`);
    }
}

(function() {
    calcularTabuada(5);
}());