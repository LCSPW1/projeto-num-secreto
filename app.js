let sortedNumberList = [];

function textOnScreen(tag, text) {
    let element = document.querySelector(tag)
    element.innerHTML = text
}

let secretNumber = randomNumberGeneration();
let gameAttempts = 1;

function printInitialMessage() {
    textOnScreen('h1', 'Jogo do número secreto');
    textOnScreen('p', 'Escolha um número entre 1 e 10');
}

printInitialMessage()

function checkAttempt() {
    let attempt = document.querySelector('input').value;

    if (attempt == secretNumber) {
        textOnScreen('h1', 'Acertou');
        let winMessage = `Você descobriu o número secreto na ${gameAttempts}º tentativa.`
        textOnScreen('p', winMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (attempt > secretNumber) {
            textOnScreen('p', 'O número secreto é menor que ' + attempt);
        } else {
            textOnScreen('p', 'O número secreto é maior que ' + attempt);
        }
        gameAttempts++;
        clearChoice();
        }
    }

function newGame() {
    console.log('Botão novo jogo clicado');
    secretNumber = randomNumberGeneration();
    gameAttempts = 1;
    clearChoice();
    printInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function randomNumberGeneration() {
    let sortedNumber = parseInt(Math.random() * 10 + 1);
    if (sortedNumberList.includes(sortedNumber)) {
        return randomNumberGeneration()
    } else {
        sortedNumberList.push(sortedNumber)
        return sortedNumber
    }
} 

function clearChoice() {
    attempt = document.querySelector('input');
    attempt.value = '';
}

