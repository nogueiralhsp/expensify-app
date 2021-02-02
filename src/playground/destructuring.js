// 
// Object Destructuring
// 
// const person = {
//     name: 'Henrique',
//     age: 35,
//     location: {
//         city: 'Taubate',
//         temp: '30'
//     }
// }

// const {name: firstName = 'Anonymous', age} = person
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }
// console.log('\n');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher
// console.log(publisherName);


// 
// Destructuring Arrays
// 

const address = ['92 Dona Moreira', 'Taubate', 'Sao Paulo', '12120-000']
const [,city, state = 'Rio Grande do Sul'] = address

console.log(`You are in ${city} ${state}`);

console.log('\n');

const item = ['Coffee (hot)','$2.00','$2.50','$2.75']
const [drink,,mediumPrice] = item
console.log(`A medium ${drink} costs ${mediumPrice}`);