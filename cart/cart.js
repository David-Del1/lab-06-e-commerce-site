import { cart } from './cart-data.js';
import { cephalopods } from '../products.js';
import { createTableRow } from '../utils.js';
import { findById } from '../utils.js';

const tBody = document.querySelector('tbody');

for (let cartItem of cart) {
    console.log(cephalopods);
    const matchingCephalopod = findById(cephalopods, cartItem.id);

    console.log('cephalopod', matchingCephalopod);
    console.log('cart item', cartItem);

    const tr = createTableRow(cartItem, matchingCephalopod);

    tBody.append(tr);
}

