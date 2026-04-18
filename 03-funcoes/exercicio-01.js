function writeName(name) {
    return "O nome informado é: " + name;
}

function isAdult(age) {
    if(age < 18)
        console.log(writeName("Maria") + " Menor de idade");
    else
        console.log(writeName("Maria") + " Maior de idade");
}

(function() {
    writeName("Maria");
    isAdult(20);
})();