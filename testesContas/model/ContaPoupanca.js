const { Titular } = require('./Titular.js')
const { Conta } = require('./Conta.js')

class ContaPoupanca extends Conta{
	static contasCP = []

	constructor(saldo, senha, agencia, numero, titular, taxaRendimentoAnual = 0.06){
		super(saldo, senha, agencia, numero, titular)
		this.taxaRendimentoAnual = taxaRendimentoAnual
		ContaPoupanca.contasCP.push(this)
	}

	aplicarRendimento(meses = 1){

		const rendimentoMensal = this.taxaRendimentoAnual / 12
		const ganho = this.saldo * rendimentoMensal * meses
		this.saldo += ganho
		return { rendimento: `Rendimento aplicado. Ganho de ${ganho.toFixed(2)}, saldo atual ${this.saldo.toFixed(2)}` }
	}

	static gerarContasPoupanca(){
		if (Titular.titulares.length === 0) {
			Titular.gerarTitulares()
		}
		const titulares = Titular.titulares
		new ContaPoupanca(2000, 4321, 201, 2001, titulares[0])
		new ContaPoupanca(1500, 8765, 202, 2002, titulares[1])
		new ContaPoupanca(5000, 3412, 203, 2003, titulares[2])
		new ContaPoupanca(800, 9988, 204, 2004, titulares[3])
		new ContaPoupanca(1200, 1111, 205, 2005, titulares[4])
	}
}

module.exports = { ContaPoupanca }