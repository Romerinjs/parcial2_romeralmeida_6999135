// Realizar las siguientes operaciones utilizando arrays básicos, tuplas y manipulacion de arrays y busqueda de elementos
// array de numeros
const arrays: [number[]] = [[1, 2, 3, 4, 5]];
console.log ('El array de numeros es: ', arrays, '\n');
// array de frutas
const fruitsName: [string[]] = [['strawberry', 'apple', 'banana', 'kiwi', 'orange']];
console.log('El array de nombres de frutas es: ', fruitsName, '\n');

// array de booleanos
const boolArray: [boolean[]] = [[true, false, true]];
console.log('El array de booleanos es: ', boolArray, '\n');

// array de tuplas
const tuple: [Array<[number, string]>] = [[[1, 'one'], [2, 'two'], [3, 'three']]];
console.log('El array de tuplas es: ', tuple, '\n');

// operaciones

console.log('I. añadir el numero 6 al array', '\n');
arrays[0].push(6);
console.log('El array de numeros actualizado: ', arrays, '\n');

console.log('II. Eliminar el ultimo numero del array', '\n');
arrays[0].pop();
console.log('el array con el numero eliminado: ', arrays, '\n');

console.log('III. encontrar el indice del numero 3 en el array de numeros', '\n');
const index = arrays[0].indexOf(3);
console.log('El indice del numero 3 es: ', index, '\n');

console.log('IV. extrae una parte del array de numeros desde el 2do elemento hasta el 4to elemento', '\n');
const extracted = arrays[0].slice(2, 4);
console.log('datos extraidos del array: ', extracted, '\n');

console.log('v. eleva al cuadrado todos los numeros del array de numeros usando map', '\n');
const squared = arrays[0].map((num) => num * num);
console.log('los numeros elevados al cuadrado son: ', squared, '\n');

console.log('VI. filtrar los numeros pares del array', '\n');
const filteredNumbers = arrays[0].filter((num) => num % 2 === 0);
console.log('Los numeros pares son: ', filteredNumbers, '\n');

console.log('VII. suma todos los numeros del array utilizando reduce', '\n');
const sum = arrays[0].reduce((acc, curr) => acc + curr, 0);
console.log('La suma de todos los numeros es: ', sum, '\n');