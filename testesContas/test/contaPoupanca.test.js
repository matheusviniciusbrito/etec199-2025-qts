const { ContaPoupanca } = require('../model/ContaPoupanca.js')
const { Titular } = require('../model/Titular.js')

beforeEach(() => {
  Titular.titulares = []
  ContaPoupanca.contasCP = []
})

test('gerar contas poupança cria 5 contas', () => {
  Titular.gerarTitulares()
  ContaPoupanca.gerarContasPoupanca()
  expect(ContaPoupanca.contasCP.length).toBe(5)
  expect(Titular.titulares.length).toBe(20)
})

test('gerar contas poupança chama gerarTitulares quando necessário', () => {
  ContaPoupanca.gerarContasPoupanca()
  expect(Titular.titulares.length).toBe(20)
  expect(ContaPoupanca.contasCP.length).toBe(5)
})

test('aplicar rendimento simples proporcional', () => {
  Titular.gerarTitulares()
  ContaPoupanca.gerarContasPoupanca()
  const conta = ContaPoupanca.contasCP[0]
  const saldoInicial = conta.saldo
  const resp = conta.aplicarRendimento(2) // 2 meses => 1% total se 6% a.a
  expect(conta.saldo).toBeCloseTo(saldoInicial * (1 + (0.06/12)*2), 5)
  expect(resp.rendimento).toContain('Ganho de')
})

test('aplicar rendimento com valor padrão (1 mês)', () => {
  Titular.gerarTitulares()
  ContaPoupanca.gerarContasPoupanca()
  const conta = ContaPoupanca.contasCP[1]
  const saldoInicial = conta.saldo
  conta.aplicarRendimento() // default 1 mês
  const ganhoEsperado = saldoInicial * (0.06/12)
  expect(conta.saldo).toBeCloseTo(saldoInicial + ganhoEsperado, 5)
})

test('aplicar rendimento com 0 meses não altera saldo', () => {
  Titular.gerarTitulares()
  ContaPoupanca.gerarContasPoupanca()
  const conta = ContaPoupanca.contasCP[2]
  const saldoInicial = conta.saldo
  const resp = conta.aplicarRendimento(0)
  expect(conta.saldo).toBeCloseTo(saldoInicial, 5)
  expect(resp.rendimento).toContain('Ganho de 0.00')
})
