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
    cPrice.textContent = cephalopods.price;

    const image = document.createElement('img');
    image.src = cephalopods.image;

    const button = document.createElement('button');

    button.textContent = 'Add to Cart';

    li.append(cName, cType, image, cDescription, cPrice, button);

    return li;
}