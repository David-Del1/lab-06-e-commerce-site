import { cephalopods } from '../products.js';
import { createCephalopodLi } from '../utils.js';

console.log(cephalopods);

const ul = document.querySelector('.cephalopod-list');

for (let cephalopod of cephalopods) {
    const li = createCephalopodLi(cephalopod);
    ul.append(li);
}



