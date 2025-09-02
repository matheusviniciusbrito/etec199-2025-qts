const {Conta} = require('../model/Conta.js')

Conta.gerarContas()
let contas = Conta.contas

test.skip('Lista de contas', ()=>{

})

test('Função transferir', () => {
    let origem = contas[5];
    let destino = contas[6];

    // Transferência com sucesso
    let resp1 = origem.transferir(destino, 200);
    let transferencia = resp1.transferencia;
    expect(transferencia).toBe(`Transferência de 200 realizada com sucesso, seu saldo atual é 800`);

    // Transferência sem saldo
    let resp2 = origem.transferir(destino, 1000);
    let transferencia2 = resp2.transferencia;
    expect(transferencia2).toBe(`Transferência não realizada por falta de saldo`);

    // Conta de origem inexistente
    let origemInexistente = null;
    let resp3 = origemInexistente?.transferir(destino, 100) || { conta: "Conta de origem inexistente" };
    let contaInexistente = resp3.conta;
    expect(contaInexistente).toBe("Conta de origem inexistente");

    // Conta de destino inexistente
    let destinoInexistente = null;
    let resp4 = origem.transferir(destinoInexistente, 100);
    let contaDestinoInexistente = resp4.conta;
    expect(contaDestinoInexistente).toBe("Conta de destino inexistente");
});

test('Testar a função saque', ()=>{
    // saque com sucesso
    let resp1 = contas[1].saque(500, true)
    let saque = resp1.saque
    expect(saque).toBe(`Saque de 500 realizado com sucesso, seu saldo atual é 1000`)
    // acesso negado
    let resp2 = contas[1].saque(500, false)
    let error = resp2.error
    expect(error).toBe("Acesso negado")
    // sem saldo
    let resp3 = contas[1].saque(5000, true)
    let saque3 = resp3.saque
    expect(saque3).toBe(`Saque não realizado por falta de saldo`) 

})

test('Testar a função autenticar', function (){
    let resp = Conta.autenticar(543, 2598, 1234)
    let conta = resp.conta
    let acesso = resp.acesso

    expect(conta.saldo).toBe(500)
    expect(acesso).toBe(true)

    let resp2 = Conta.autenticar(543, 2598, 12345545)
    let conta2 = resp2.conta
    let acesso2 = resp2.acesso

    expect(conta2).toBe(null)
    expect(acesso2).toBe(false)

})

test('Depositar', ()=>{
    let resp = contas[3].depositar(100, true)
    let resp2 = contas[3].depositar(100, false)

    expect(resp.deposito).toBe(`Realizado deposito de ${100} com sucesso, seu saldo atual é 850`)
    expect(resp2.deposito).toBe("Acesso negado")
    
})

test('Cobrar Taxa', ()=>{
    let resp = contas[4].cobrarTaxar()
    expect(resp).toBe("Taxa cobrada com sucesso")

    let resp2 = contas[4].cobrarTaxar(1000000)
    expect(resp2).toBe("Saldo insuficiente para cobrar taxa")
})

test('Testar a função visualizarSaldo', ()=>{
    let resp = contas[0].visualizarSaldo(true) //  { saldo : 500 }
    expect(resp.saldo).toBe(500)

    let resp2 = contas[0].visualizarSaldo(false)
    expect(resp2.error).toBe("Acesso negado")

})

