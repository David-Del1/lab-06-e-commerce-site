// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCephalopodLi } from '../utils.js';
const test = QUnit.test;

test('It should take in a cephalopod object and return an li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class=\"cephalopod\"><h2>Becky</h2><h3>Cuttlefish</h3><img src=\"../assets/francis-nie-DcitvRh5n18-unsplash.jpg\" alt=\"Cuttlefish\"><p class=\"description\">Becky is a cuttlefish (or cuttles for short). Cuttlefish range between 6 - 10 inches in length and live about 2 years. Their diet consists mainly of crabs, shrimp, and fish. They're considered one of the most intelligent invertebrates on earth!</p><p class=\"price\">Price: $25</p><button class=\"add-to-cart\">Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCephalopodLi({
        //id: 'one',
        name: 'Becky',
        image: '../assets/francis-nie-DcitvRh5n18-unsplash.jpg',
        description: 'Becky is a cuttlefish (or cuttles for short). Cuttlefish range between 6 - 10 inches in length and live about 2 years. Their diet consists mainly of crabs, shrimp, and fish. They\'re considered one of the most intelligent invertebrates on earth!',
        category: 'Cuttlefish',
        price: '25'

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
