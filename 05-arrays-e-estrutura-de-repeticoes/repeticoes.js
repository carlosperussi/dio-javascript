// Estrutura de repetição

const notas = [7, 8, 9, 10];

// Usando for para iterar sobre as notas
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`);
}

// Usando for...of para iterar sobre as notas
for (const nota of notas) {
    console.log(`Nota: ${nota}`);
}

// Usando while para iterar sobre as notas
let index = 0;
while (index < notas.length) {
    console.log(`Nota ${index + 1}: ${notas[index]}`);
    index++;
}

// Usando do...while para iterar sobre as notas
let idx = 0;
do {
    console.log(`Nota ${idx + 1}: ${notas[idx]}`);
    idx++;
} while (idx < notas.length);

// Exemplo simples de como percorrer um array
let mediaFinal = 0;
let somaNotas = 0;

for(let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

mediaFinal = somaNotas / notas.length;
console.log("Média final é: " + mediaFinal);