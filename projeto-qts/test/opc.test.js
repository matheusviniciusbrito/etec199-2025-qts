const { olaMundo, areaDoTriangulo, calcularDesconto, pegarAluno } = require('../opc.js');	

test('Teste ola mundo', () => {
    let texto = olaMundo();
  expect(texto).toBe("ola mundo");
})

test('Teste area do triangulo', () => {
    let base = 10;
    let altura = 5;
    let area = areaDoTriangulo(base, altura);
    expect(area).toBe(25);
})

test('Teste calcular desconto', () => {
    let valor = 100;
    let desconto = calcularDesconto(valor);
    expect(desconto).toBe(15);
})

test('Teste pegar aluno', () => {
    let aluno = pegarAluno();
    let test = {
        nome: "Geovanne Carlos",
        matricula: 15543,
        telefone_responsavel: 190,
        curso: "INFO",
    }
    expect(aluno[0]).toBe(test[0]);
    expect(aluno[1]).toBe(test[1]);
    expect(aluno[2]).toBe(test[2]);
    expect(aluno[3]).toBe(test[3]);
})

test('Teste pegar aluno com toEqual', () => {
    let aluno = pegarAluno();
    expect(aluno).toEqual(nome, matricula, telefone_responsavel, curso);
})

