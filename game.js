
let roundScore = 0
let scores = [0, 0]
let activePlayer = 0
let dice = document.querySelector('.dice')



document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'


const newGame = document.querySelector('.btn-new')
const rollBtn = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')

// CLICK NEW GAME LOGIC
newGame.addEventListener('click', () => {
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'
  roundScore = 0
  scores = [0, 0]
  activePlayer = 0
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
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'


  }
})

