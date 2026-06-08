// TODO: Create a multiline string using template literals 
const message = `Habibti.
Ice Man.
Maid of honour.`;

console.log(message);




// TODO: Create a function that uses template literals for HTML generation
function createUserCard(name, age) {
  return `
    <div class="user-card">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
    </div>
  `;
}

console.log(createUserCard("Purrity", 20));

// TODO: Convert regular functions to arrow functions 
const add = (a, b) => a + b;

console.log(add(22, 78));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens);
