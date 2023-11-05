const sneakerButton = document.querySelector('#add-sneaker');
const sneakerCart = document.querySelector('.sneaker-cart');
const closeButton = document.querySelector('#close');
const listItems = document.querySelectorAll('.sneakers button');
const reset = document.querySelector('#reset');
const stockDropdown = document.querySelector('.sneakers ul');


sneakerButton.addEventListener('click', () => {
    sneakerCart.classList.toggle('open');
})

closeButton.addEventListener('click', () => {
    sneakerCart.classList.remove('open')
})