// Função
function isPar(numero) {
    return numero % 2 === 0;
}

// Testes de unidade
console.assert(isPar(4) === true, "Erro: 4 deveria ser par");
console.assert(isPar(7) === false, "Erro: 7 deveria ser ímpar");
console.assert(isPar(0) === true, "Erro: 0 deveria ser par");
console.assert(isPar(-2) === true, "Erro: -2 deveria ser par");
