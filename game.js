
let roundScore = 0
let scores = [0, 0]
let activePlayer = 0


document.querySelector('.dice').style.display = 'none';

const newGame = document.querySelector('btn-new')
const rollBtn = document.querySelector('.btn-roll')
const holdBtn = document.querySelector('.btn-hold')

rollBtn.addEventListener('click', () => {
  let roll = Math.floor(Math.random() * 6) + 1
  console.log(roll)
})