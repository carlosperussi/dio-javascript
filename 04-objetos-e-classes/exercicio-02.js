/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)).
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nomeParam, pesoParam, alturaParam) {
        this.nome = nomeParam;
        this.peso = pesoParam;
        this.altura = alturaParam;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        let condicao;
        let imcParam = this.calcularIMC();

        if(imcParam < 18.5)
            condicao = "Abaixo do peso";
        else if(imcParam >= 18.5 && imcParam < 25)
            condicao = "Peso normal";
        else if(imcParam >= 25 && imcParam < 30)
            condicao = "Acima do peso";
        else if(imcParam >= 30 && imcParam < 40)
            condicao = "Obeso";
        else
            condicao = "Obesidade grave";

        return condicao;
    }
}



(function() {
    const newPerson = new Pessoa("José", 70, 1.75);
    console.log(newPerson.calcularIMC().toFixed(2).replace(".", ","));
    console.log(newPerson.classificarIMC());
})();