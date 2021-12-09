document.getElementById('botaoAdiciona').addEventListener('click', adicionar)
document.getElementById('botaoListar').addEventListener('click', listar)
document.getElementById('botaoResumir').addEventListener('click', resumir)

let criancas = []
let quantCriancas = 0
function adicionar() {
    let crianca = new Object()
    crianca.nome = document.getElementById('nome').value
    crianca.idade = parseInt(document.getElementById('idade').value)

    if (isNaN(crianca.idade) || crianca.nome == '') {
        alert('Alguma informação não é válida')
        return
    }

    criancas.push(crianca)
    quantCriancas++
    listar()
}

function listar() {
    var txt = ''
    for (let i = 0; i < criancas.length; i ++) {
        txt += `${criancas[i].nome} - ${criancas[i].idade} anos\n`
    }
    document.getElementById('final').innerHTML = txt
}

function resumir() {
    var ordenaCrianca = criancas.map(function (crianca) { return crianca})
    ordenaCrianca.sort(function(c1, c2) { return c1.idade - c2.idade })
    var criancasPorIdade = []
    var nomesDasCriancas = []
    var texto = ''
    
    for (let i = 0; i < ordenaCrianca.length; i++) {
        var posicao = -1
        for (let j = 0; j < criancasPorIdade.length; j++) {
            if (criancasPorIdade[j].idade == ordenaCrianca[i].idade) {
                posicao = j
                break
            }
        }

        if (posicao > -1) {
            criancasPorIdade[posicao].quant++
            nomesDasCriancas[ordenaCrianca[i].idade] += `, ${ordenaCrianca[i].nome}`
            criancasPorIdade[posicao].nomes = nomesDasCriancas[ordenaCrianca[i].idade]
        } else {
            nomesDasCriancas[ordenaCrianca[i].idade] = `${ordenaCrianca[i].nome}`
            criancasPorIdade.push({idade: ordenaCrianca[i].idade, quant: 1, nomes: ordenaCrianca[i].nome})
        }
    }

    for (let i = 0; i < criancasPorIdade.length; i++) {
        let percent = (100 * criancasPorIdade[i].quant) / quantCriancas
        criancasPorIdade[i].percent = percent
    }

    for (let i = 0; i < criancasPorIdade.length; i++) {
        texto += `${criancasPorIdade[i].idade} ano(s): ${criancasPorIdade[i].quant} criança(s) - ${criancasPorIdade[i].percent.toFixed(2)}% (${criancasPorIdade[i].nomes})\n\n`
    }

    document.getElementById('final').innerHTML = texto
}