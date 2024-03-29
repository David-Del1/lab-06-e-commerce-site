import { addItemToCart } from './local-storage-utils.js';

export function createCephalopodLi(cephalopods) {
    const li = document.createElement('li');

    li.classList.add('cephalopod');
    
    const cName = document.createElement('h2');
    cName.textContent = cephalopods.name;


    const cType = document.createElement('h3');
    cType.textContent = cephalopods.category;

    const cDescription = document.createElement('p');
    cDescription.classList.add('description');
    cDescription.textContent = cephalopods.description;

    const cPrice = document.createElement('p');
    cPrice.classList.add('price');
    cPrice.textContent = `Price: $${cephalopods.price}`;

    const image = document.createElement('img');
    image.src = cephalopods.image;
    image.alt = cephalopods.category;

    const button = document.createElement('button');
    button.classList.add('add-to-cart');
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
        addItemToCart(cephalopods.id);
    });

    li.append(cName, cType, image, cDescription, cPrice, button);

    return li;
}

// Shopping cart function

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }

}

// calculate item total function
export function calcItemTotal(quantity, price) {
    let total = 0;
    total += quantity * price;
    return total;
}

export function createTableRow(cartItem, someCephalopod) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');
    tdName.textContent = someCephalopod.name;
    tdQuantity.textContent = cartItem.quantity;
    const totalPrice = calcItemTotal(cartItem.quantity, someCephalopod.price);

    const totalAsUSD = `$${totalPrice}.00`;

    tdPrice.textContent = totalAsUSD;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function createTotalRow(cartArray, cephalopodArray) {
    let sum = 0;

    for (let someCartItem of cartArray) {
        
       
        const matchingCephalopod = findById(cephalopodArray, someCartItem.id);

        const lineItem = matchingCephalopod.price * someCartItem.quantity;

        sum = sum + lineItem;

    }
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td2.textContent = 'Total:';

    td3.textContent = `$${sum}.00`;

    tr.append(td1, td2, td3);

    return tr;
}