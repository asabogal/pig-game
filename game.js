
let roundScore = 0
let scores = [0, 0]
let activePlayer = 0


document.querySelector('.dice').style.display = 'none';


const newGame = document.querySelector('.btn-new')
const rollBtn = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')

newGame.addEventListener('click', () => {
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-p0').textContent = '0'
  document.getElementById('score-p1').textContent = '0'
  document.getElementById('current-p0').textContent = '0'
  document.getElementById('current-p1').textContent = '0'
})

rollBtn.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6) + 1
  let dice = document.querySelector('.dice')

  dice.style.display = 'block'
  dice.src = `./images/dice${roll}.png`
})

