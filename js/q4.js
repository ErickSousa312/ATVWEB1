document.getElementById('botaoAdiciona').addEventListener('click', adicionar)
document.getElementById('botaoVerifica').addEventListener('click', verificarOrdem)

let vetNumeros = []

function adicionar () {
    document.getElementById('azul').innerHTML = ''
    let numero = parseInt(document.getElementById('num').value)
    if (isNaN(numero)) {
        alert('Insira um número válido!')
        return
    } else if (vetNumeros.indexOf(numero) != -1) {
        alert('Você já inseriu esse número!')
        return
    }

    vetNumeros.push(numero)

    exibir()
}

function exibir () {
    let numeros = 'Números: '

    for (let i = 0; i < vetNumeros.length; i++) {
        if (i == vetNumeros.length - 1) {
            numeros += vetNumeros[i]
        } else {
            numeros += `${vetNumeros[i]}, `
        }
    }

    document.getElementById('listaNumeros').innerHTML = numeros
}

function verificarOrdem () {
    let numerosOrdenados = vetNumeros.map(function (numero) { return numero }).sort(function (n1, n2) { return n1 - n2 })

    for (let i = 0; i < numerosOrdenados.length; i++) {
        if (numerosOrdenados[i] != vetNumeros[i]) {
            document.getElementById('azul').innerHTML = 'Atenção... Números não estão em ordem crescente'
            return
        }
    }
    document.getElementById('azul').innerHTML = 'Ok! Números estão em ordem crescente'
}