document.getElementById('botaoAdiciona').addEventListener('click', adicionar)
document.getElementById('botaoListar').addEventListener('click', listar)
document.getElementById('botaoMostrarTabela').addEventListener('click', mostrarTabela)

let vetClubes = []

function adicionar () {
    let clube = document.getElementById('clube').value
    if (clube == '' || clube == ' ') {
        alert('Insira o time...')
        return
    } else if (vetClubes.indexOf(clube) != -1) {
        alert('Time já adicionado, tente outro...')
        return
    } else {
        vetClubes.push(clube)
        listar()
    }
}

function listar () {
    document.getElementById('final').innerHTML = ''
    
    let texto = ''

    for (let i = 0; i < vetClubes.length; i++) {
        texto += `${i + 1}.  ${vetClubes[i]}\n`
    }

    document.getElementById('final').innerHTML = texto
}

function mostrarTabela () {
    document.getElementById('final').innerHTML = ''
    
    let texto = ''

    if (vetClubes.length % 2 == 0) {
        for (let i = 0, j = vetClubes.length - 1; i < vetClubes.length / 2; i++, j--) {
            texto += `${vetClubes[i]} x ${vetClubes[j]}\n`
        }
    } else {
        alert('Precisa-se de uma quantidade par de times para se formar uma tabela')
        listar()
        return
    }
    document.getElementById('final').innerHTML = texto
}