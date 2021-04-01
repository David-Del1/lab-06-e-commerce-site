import { cart } from './cart-data.js';
import { cephalopods } from '../products';
import { createTableRow } from '../utils.js';
import { findById } from '../utils.js';
import { table } from 'node:console';

const tBody = document.querySelector('tbody');

for (let cartItem of cart) {

    const matchingCephalopod = findById(cephalopods, cartItem.id);

    console.log(matchingCephalopod, cartItem);

    const tr = createTableRow(cartItem, matchingCephalopod);

    table.append(tr);
}