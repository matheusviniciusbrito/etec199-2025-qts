
function olaMundo(){
    return "ola mundo"
}

function areaDoTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularDesconto(valor){
    return valor * 0.15;
}

function pegarAluno(){
    let aluno = {
        nome: "Geovanne Carlos",
        matricula: 15543,
        telefone_responsavel: 190,
        curso: "INFO",
    }
    return aluno;
}

module.exports = { olaMundo, areaDoTriangulo, calcularDesconto, pegarAluno };