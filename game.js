
let roundScore = 0
let scores = [0, 0]
let activePlayer = 0
let dice = document.querySelector('.dice')

let playerOneScore = document.getElementById('score-0')
let playerTwoScore = document.getElementById('score-1')
let playerOneCurrent = document.getElementById('current-0')
let playerTwoCurrent = document.getElementById('current-1')

let playerOnePanel = document.querySelector('.player-0-panel')
let playerTwoPanel = document.querySelector('.player-1-panel')

const newGame = document.querySelector('.btn-new')
const rollBtn = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')

start()

// CLICK NEW GAME LOGIC
newGame.addEventListener('click', () => {
  start()
})

// ROLL LOGIC
rollBtn.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6) + 1
  dice.style.display = 'block'
  dice.src = `./images/dice${roll}.png`
  
  if (roll !== 1) {
    roundScore += roll
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore

  } else {
    
    setTimeout(()=>{ alert(`Player ${activePlayer + 1} Rolled a 1. Your score resets to 0!`); }, 300);
    setTimeout(()=>{changePlayer()}, 1000) 
  }
})

function start() {
  roundScore = 0
  scores = [0, 0]
  activePlayer = 0
  dice.style.display = 'none';
  resetScores()
};

function resetScores() {
  playerOneScore.textContent = '0'
  playerTwoScore.textContent = '0'
  playerOneCurrent.textContent = '0'
  playerTwoCurrent.textContent = '0'
};

function changePlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0

  playerOneCurrent.textContent = '0'
  playerTwoCurrent.textContent = '0'

  playerOnePanel.classList.toggle('active')
  playerTwoPanel.classList.toggle('active')
}