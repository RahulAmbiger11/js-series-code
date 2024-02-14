let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    // console.log(guess)
    validateGuess(guess)
})


function validateGuess(guess) {
    //for validation
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1) {
        alert('Please enter a number more than 1')
    } else if(guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    //To check wether random number matched with guess  & wether its high or low  

    if(guess === randomNumber) {
        displayMessage(`You guessed it right`)
    } else if(guess < randomNumber) {
        displayMessage(`Number guessed is too Low`)
    } else if(guess > randomNumber) {
        displayMessage(`Number guessed is too High`)
    }
}

function displayGuess(guess) {
    //To clear i/p field to add next guess, to add guess in prev guesses, reduce no.of guesses
    //For DOM manipulation

    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    // To display messages
    lowOrHi.innerHTML = `<h1>${message}</h2>`

}

function endGame() {
    // to end the prev game
    userInput.value = ''
    userInput.setAttribute('disabled','')
    //to make p tag act like a button
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    // to start a new game

    newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })

}

