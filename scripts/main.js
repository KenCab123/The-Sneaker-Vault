const form = document.querySelector("form")

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {name, price, stock, color, rating} = event.target;

    generateSneaker(name.value, price.value, stock.value, color.value, rating.value);
    
    // NOT SURE WHY THE FORM.RESET() WAS NOT WORKING.
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