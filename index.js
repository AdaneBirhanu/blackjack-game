
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
// 1. Declare a variable called message and assign its value to an empty string

// 2f. Reassign the message variable to the string we're logging out
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "Per",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard(){
    let randomNumer = Math.floor(Math.random() * 13) + 1
if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum :" + sum
    cardEl.textContent = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
if (sum <= 20) {

    message = "Do you want to draw a new card? 🙂"
   
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEl.textContent = message
}
function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    if(isAlive === true && hasBlackJack === false){
let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}
