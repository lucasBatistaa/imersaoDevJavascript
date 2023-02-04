var secretNumber = parseInt(Math.random() * 1001)

do {
    var userResponse = prompt('Insert a number(0-1000):')

    if (secretNumber == userResponse) {
        alert("Acertou!")
    } else if (secretNumber > userResponse) {
        alert("Errou... Número secreto é maior!")
    } else {
        alert("Errou... Número secreto é menor!")
    }
} while (secretNumber != userResponse)
