const Calculadora = require('./calculadora'); // Importa o módulo

// Instância da classe
const calculadora = new Calculadora();

// Testes de unidade
try {
    console.assert(calculadora.somar(2, 3) === 5, "Erro: 2 + 3 deveria ser 5");
    console.assert(calculadora.subtrair(5, 3) === 2, "Erro: 5 - 3 deveria ser 2");
    console.assert(calculadora.multiplicar(4, 3) === 12, "Erro: 4 * 3 deveria ser 12");
    console.assert(calculadora.dividir(10, 2) === 5, "Erro: 10 / 2 deveria ser 5");

    // Testar divisão por zero
    try {
        calculadora.dividir(10, 0);
        console.assert(false, "Erro: Divisão por zero deveria lançar uma exceção");
    } catch (error) {
        console.assert(error.message === "Divisão por zero não é permitida.", "Erro: Mensagem incorreta para divisão por zero");
    }

    console.log("Todos os testes passaram!");
} catch (error) {
    console.error("Falha no teste:", error.message);
}
