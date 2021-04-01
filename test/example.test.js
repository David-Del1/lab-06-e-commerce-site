// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calcItemTotal, createCephalopodLi, createTableRow, findById } from '../utils.js';
const test = QUnit.test;

test('It should take in a cephalopod object and return an li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = `<li class=\"cephalopod\"><h2>Becky</h2><h3>Cuttlefish</h3><img src=\"../assets/francis-nie-DcitvRh5n18-unsplash.jpg\" alt=\"Cuttlefish\"><p class=\"description\">Becky is a cuttlefish (or cuttles for short). Cuttlefish range between 6 - 10 inches in length and live about 2 years. Their diet consists mainly of crabs, shrimp, and fish. They're considered one of the most intelligent invertebrates on earth!</p><p class=\"price\">Price: $25</p><button class=\"add-to-cart\">Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = createCephalopodLi({
        //id: 'one',
        name: 'Becky',
        image: '../assets/francis-nie-DcitvRh5n18-unsplash.jpg',
        description: 'Becky is a cuttlefish (or cuttles for short). Cuttlefish range between 6 - 10 inches in length and live about 2 years. Their diet consists mainly of crabs, shrimp, and fish. They\'re considered one of the most intelligent invertebrates on earth!',
        category: 'Cuttlefish',
        price: '25'

    });

    // findById array

    
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('function should take an id and return that item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    

    // findById array

    const someArray = [
        {
            id: 1,
            name: 'Fred',
            Price: 20
        },
        {
            id: 2,
            name: 'Fred',
            Price: 20
        },
        {
            id: 3,
            name: 'Fred',
            Price: 20
        },
        {
            id: 4,
            name: 'Fred',
            Price: 20
        }
    ];

    let expected = {
        id: 1,
        name: 'Fred',
        Price: 20
    };

    let actual = findById(someArray, someArray[0].id);
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('function should take in two numbers and multiply them, returning the total.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    let expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = calcItemTotal(3, 4);

    // findById array

    
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// createTableRow test
test('', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartTestItem = {
        id: 1,
        quantity: 4
    };

    const cephalopodTestItem = {
        id: 1,
        name: 'Becky',
        image: '../assets/francis-nie-DcitvRh5n18-unsplash.jpg',
        description: 'Becky is a cuttlefish (or cuttles for short). Cuttlefish range between 6 - 10 inches in length and live about 2 years. Their diet consists mainly of crabs, shrimp, and fish. They\'re considered one of the most intelligent invertebrates on earth!',
        category: 'Cuttlefish',
        price: '25'
    };

    let expected = '<tr><td>Becky</td><td>4</td><td>$100.00</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    let actual = createTableRow(cartTestItem, cephalopodTestItem);

    // findById array

    
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

