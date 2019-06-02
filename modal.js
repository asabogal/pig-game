let about = document.querySelector('.about')
let modal = document.querySelector('.about-modal')
let close = document.querySelector('.close-btn')

about.addEventListener('click', () => {
  modal.style.display = 'block'
})

close.addEventListener('click', () => {
  modal.style.display = 'none'
})
