(function() {
    // Criando array simples
    const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

    // Acessando elementos do array
    console.log(alunos[0]); // João
    console.log(alunos[1]); // Maria

    // Adicionando um novo aluno
    alunos.push('Lucas');
    console.log(alunos); // ['João', 'Maria', 'Pedro', 'Ana', 'Lucas']

    // Removendo o último aluno
    alunos.pop();
    console.log(alunos); // ['João', 'Maria', 'Pedro', 'Ana']

    // Iterando sobre o array
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i]);
    }

    // Usando for...of para iterar
    for (const aluno of alunos) {
        console.log(aluno);
    }
})();