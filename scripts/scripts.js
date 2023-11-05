const sneakerButton = document.querySelector('#add-sneaker');
const sneakerCart = document.querySelector('.sneaker-cart');
const closeButton = document.querySelector('#close');
const listItems = document.querySelectorAll('.sneakers button');
const reset = document.querySelector('#reset');
const stockDropdowns = document.querySelector('.sneakers ul');


sneakerButton.addEventListener('click', () => {
    sneakerCart.classList.toggle('open');
})

closeButton.addEventListener('click', () => {
    sneakerCart.classList.remove('open')
})


const sneakerTemplate = (name, price, stock, color, rating) => {
    const li = document.createElement('li')
    li.classList.add("single-sneaker");

    const stockDropdown = document.createElement("select");
    stockDropdown.innerHTML = `
    <option value="In Stock" ${stock === 'In Stock' ? 'selected' : ''}>In Stock</option>
    <option value="Out Of Stock" ${stock === 'Out Of Stock' ? 'selected' : ''}>Out Of Stock</option>
    `;

    stockDropdown.addEventListener('change', (event) => {
        stock = event.target.value
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = 'Remove Sneaker';
    removeButton.addEventListener('click', (event) => {
        event.target.closest('.single-sneaker').remove();
    });

    li.innerHTML = `
    <h3>${stock === 'In Stock' ? '🟢' : '🔴'}</h3>
    <p><strong>Name</strong>: ${name}</p>
    <p><strong>Price:</strong> $${price}</p>
    <p><strong>${stockDropdown.outerHTML}</strong></p>
    <p><strong>Color:</strong> ${color}</p>
    <p><strong>Rating:</strong> ${rating}</p>
   `;

   li.appendChild(removeButton);

   return li
}


const generateSneaker = (name, price, stock, color, rating) => {

    const li = sneakerTemplate(name, price, stock, color, rating);
    const ul = document.querySelector('.sneakers ul');

    ul.append(li);
}