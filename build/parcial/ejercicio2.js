const arrays = [[1, 2, 3, 4, 5]];
console.log('El array de numeros es: ', arrays, '\n');
const fruitsName = [['strawberry', 'apple', 'banana', 'kiwi', 'orange']];
console.log('El array de nombres de frutas es: ', fruitsName, '\n');
const boolArray = [[true, false, true]];
console.log('El array de booleanos es: ', boolArray, '\n');
const tuple = [[[1, 'one'], [2, 'two'], [3, 'three']]];
console.log('El array de tuplas es: ', tuple, '\n');
console.log('I. añadir el numero 6 al array', '\n');
arrays[0].push(6);
console.log('El array de numeros actualizado: ', arrays, '\n');
console.log('II. Eliminar el ultimo numero del array', '\n');
arrays[0].pop();
console.log('el array con el numero eliminado: ', arrays, '\n');
console.log('III. encontrar el indice del numero 3 en el array de numeros', '\n');
console.log('El indice del numero 3 es: ', arrays[0].indexOf(3), '\n');
//# sourceMappingURL=ejercicio2.js.map