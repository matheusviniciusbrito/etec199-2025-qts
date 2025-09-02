const { ContaCorrente } = require('../model/ContaCorrente.js')
const { Titular } = require('../model/Titular.js')

beforeEach(() => {
  Titular.titulares = []
  ContaCorrente.contasCC = []
})

test('gerar contas correntes cria 20 contas e usa titulares existentes', () => {
  Titular.gerarTitulares()
  ContaCorrente.gerarContasCorrentes()
  expect(ContaCorrente.contasCC.length).toBe(20)
  expect(Titular.titulares.length).toBe(20)
})

test('gerar contas correntes chama gerarTitulares quando lista vazia', () => {
  ContaCorrente.gerarContasCorrentes()
  expect(Titular.titulares.length).toBe(20)
  expect(ContaCorrente.contasCC.length).toBe(20)
})

test('cobrar taxa reduz de 20', () => {
  Titular.gerarTitulares()
  ContaCorrente.gerarContasCorrentes()
  const conta = ContaCorrente.contasCC[0]
  const saldoAntes = conta.saldo
  conta.cobrarTaxa()
  expect(conta.saldo).toBe(saldoAntes - 20)
})
