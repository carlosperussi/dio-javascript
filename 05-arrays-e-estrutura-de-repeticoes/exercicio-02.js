// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

function encontrarPares(numerosParam) {
    for(let i = 0; i < numerosParam.length; i++) {
        if(numerosParam[i] % 2 === 0) {
            console.log(`Número par encontrado: ${numerosParam[i]}`);
        }
    }
}

(function() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    encontrarPares(numeros);
})();