document.getElementById('botaoAdiciona').addEventListener('click', adicionar)
document.getElementById('botaoListar').addEventListener('click', listar)
document.getElementById('botaoAprovados').addEventListener('click', aprovados)

let vetCandidatos = []

function adicionar () {
    let nome = document.getElementById('candidato').value
    let acertos = parseInt(document.getElementById('acertos').value)

    if (isNaN(acertos) || nome == '') {
        alert('Informações Inválidas')
        return
    }
    let candidato = {nome, acertos}
    vetCandidatos.push(candidato)
    listar()
}

function listar () {
    let texto = ''
    
    for (let i = 0; i < vetCandidatos.length; i++) {
        texto += `${vetCandidatos[i].nome} - ${vetCandidatos[i].acertos} acertos\n`
    }
    document.getElementById('final').innerHTML = texto
}

function aprovados () {
    let quant = parseInt(prompt('Número de Acertos para Aprovação?'))
    let texto = ''

    if (vetCandidatos.length == 0) {
        return
    } else if (isNaN(quant)) {
        alert('Número Inválido')
        return
    }

    let candAprovados = vetCandidatos.filter(function(candidato) { return candidato.acertos >= quant }).sort(function(c1, c2) { return c2.acertos - c1.acertos})

    if(candAprovados.length == 0) {
        document.getElementById('final').innerHTML = 'Ninguém foi aprovado'
        return
    }

    for (let i = 0; i < candAprovados.length; i++) {
        texto += `${candAprovados[i].nome} - ${candAprovados[i].acertos} acertos\n`
    }
    document.getElementById('final').innerHTML = texto
}