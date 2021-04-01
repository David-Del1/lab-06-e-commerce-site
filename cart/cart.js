import { cephalopods } from '../products.js';
import { createTableRow } from '../utils.js';
import { createTotalRow } from '../utils.js';
import { findById } from '../utils.js';
import { getCart } from '../local-storage-utils.js';

const button = document.getElementById('submit');

const cart = getCart();

const tBody = document.querySelector('tbody');

for (let cartItem of cart) {
    const matchingCephalopod = findById(cephalopods, cartItem.id);
    const tr = createTableRow(cartItem, matchingCephalopod);
    

    tBody.append(tr);
   
}

const trTotal = createTotalRow(cart, cephalopods);
tBody.append(trTotal);

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart));

    localStorage.clear();

    window.location = '/';
});

