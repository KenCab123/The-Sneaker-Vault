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


listItems.forEach(li => {
    li.addEventListener('click', (event) => {
        event.target.closest('.single-sneaker').remove()
    })
})


reset.addEventListener('click', (event) => {
    const sneakerAdder = event.target.closest('.sneaker-adder');
    const textInputs = sneakerAdder.querySelectorAll('input[type="text"]');
    
    textInputs.forEach(input => {
        input.value = ''; 
    });

    const numInputs = sneakerAdder.querySelectorAll('input[type="number"]');
    
    numInputs.forEach(input => {
        input.value = ''; 
    });

    const dropDownInputs = sneakerAdder.querySelectorAll('select');
    
    dropDownInputs.forEach(input => {
        input.value = "In Stock"; 
    });
  })


stockDropdowns.addEventListener('change', (event) => {

    if(event.target.tagName === "SELECT" && event.target.closest(".single-sneaker")) {
        const parentLi = event.target.closest(".single-sneaker");

        const emojiElem = parentLi.querySelector('h3');

        const selectedValue = event.target.value;

        if(selectedValue === "In Stock") {
            emojiElem.textContent = '🟢';
        } else {
            emojiElem.textContent = '🔴';
        }
    }
})