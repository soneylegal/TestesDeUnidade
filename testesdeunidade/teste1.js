function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}

console.assert(fatorial(0) === 1, "Erro: Fatorial de 0 deve ser 1");
console.assert(fatorial(5) === 120, "Erro: Fatorial de 5 deve ser 120");
