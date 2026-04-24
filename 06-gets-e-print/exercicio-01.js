/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 0 a 100. Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

    Dados de entrada: 5, 50, 10, 98, 23
    Resultado esperado: 98
*/

const {gets, print} = require ("./funcoes-auxiliares.js");

(function() {
    const numerosSorteados = [];

    for (let i = 0; i < 5; i++) {
        numerosSorteados.push(gets());
    }

    const maiorNumero = Math.max(...numerosSorteados);
    print(maiorNumero);
})();