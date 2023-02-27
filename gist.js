const pets = ['Cat', 'Dog', 'Bird', 'Fish', 'Frog', 'Hamster', 'Pig', 'Horse', 'Lion', 'Dragon'];
// Print all pets
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);


//The above code is not DRY.
//A DRY VERSION OF THE CODE
pets.forEach((pet) =>(console.log(pet)))
This code is DRY because it prints outs all the list of Pets with just one line of code.


const greet = (message, name) => {
  console.log(`${message}, ${name}!`)
}

greet('Hello', 'John');
greet('Hola', 'Antonio');
greet('Ciao', 'Luigi')

/The above code is not DRY.
The above code can be further simplified 
const greet = ( message, name) => console.log(`${message}, ${name}!`)
