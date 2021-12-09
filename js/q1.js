document.getElementById("botaoReiniciar").style.display = 'none'
let random = Math.floor(Math.random() * 99 + 1)

let chances = 6
let erros = 0
let numsTentados = []
let textoErros = ''

function aposta() {
    let numero = parseInt(document.getElementById("num").value)

    if (numero < 1 || numero > 100 || isNaN(numero)) {
        alert("Número Inválido")
        return
    } else if (numero == random) {
        document.getElementById("final").innerHTML = "Você venceu!!!"
        fim()
        return
    } else if (numsTentados.length == 0) {
        numsTentados.push(numero)
        erros++
        chances--
        textoErros += `${numero}`
        document.getElementById('erros').innerHTML = `Erros: ${erros} (${textoErros})`
        document.getElementById('chances').innerHTML = `Chances: ${chances}`

        if (numero < random) {
            document.getElementById("final").innerHTML = `Dica: Tente um número maior que ${numero}`
        } else {
            document.getElementById("final").innerHTML = `Dica: Tente um número menor que ${numero}`
        }
    } else if (numsTentados.length == 5) {
        if (numsTentados.indexOf(numero) == -1) {
            numsTentados.push(numero)
            document.getElementById("final").innerHTML = `Game Over!! Número Sorteado: ${random}`
            erros++
            chances--
            textoErros += `, ${numero}`
            document.getElementById('erros').innerHTML = `Erros: ${erros} (${textoErros})`
            document.getElementById('chances').innerHTML = `Chances: ${chances}`
            fim()
            return
        } else {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
            return
        }
    } else {
        if (numsTentados.indexOf(numero) == -1) {
            numsTentados.push(numero)
            erros++
            chances--
            textoErros += `, ${numero}`
            document.getElementById('erros').innerHTML = `Erros: ${erros} (${textoErros})`
            document.getElementById('chances').innerHTML = `Chances: ${chances}`

            if (numero < random) {
                document.getElementById("final").innerHTML = `Dica: Tente um número maior que ${numero}`
            } else {
                document.getElementById("final").innerHTML = `Dica: Tente um número menor que ${numero}`
            }
        } else {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
            return
        }
    }
}

function fim() {
    document.getElementById("botaoReiniciar").style.display = 'inline'
    document.getElementById('num').disabled = true
    document.getElementById("botaoAposta").disabled = true
}

function reinicia() {
    document.getElementById("botaoReiniciar").style.display = 'none'
    random = Math.floor(Math.random() * 99 + 1)
    document.getElementById('num').disabled = false
    document.getElementById("botaoAposta").disabled = false
    erros = 0
    chances = 6
    numsTentados = []
    textoErros = ''
    textoFinal = ''
    document.getElementById("erros").innerHTML = ''
    document.getElementById("chances").innerHTML = ''
    document.getElementById("final").innerHTML = ''
}

document.getElementById("botaoAposta").addEventListener('click', aposta)
document.getElementById("botaoReiniciar").addEventListener('click', reinicia)