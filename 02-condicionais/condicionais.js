// Estruturas condicionais

// Booleanos
const isBlue = true;
const isRed = false;

const numero = 6;
// O operador % retorna o resto da divisão
const numeroDivisivelPor5 = (numero % 5) === 0;

// Definindo condicionais

if(numero === 0 || numero === 5)
    console.log("O número é inválido");
else if(numeroDivisivelPor5) 
    console.log("Sim");
else 
    console.log("Não");

// IF simplificado
if((numero % 2) === 0)
    console.log("O número é par");
else
    console.log("O número é ímpar");