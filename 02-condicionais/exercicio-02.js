/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média ee a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5: Reprovado
- Média entre 5 e 7: Recuperação
- Média maior ou igual a 7: Aprovado
*/

const nota1 = 6.5;
const nota2 = 7.0;
const nota3 = 8.5;

const media = (nota1 + nota2 + nota3) / 3;
let classificacao;

if(media < 5)
    classificacao = "Reprovado";
else if(media >= 5 && media < 7)
    classificacao = "em Recuperação";
else
    classificacao = "Aprovado";

console.log("O aluno está " + classificacao + " com média " + media.toFixed(2));