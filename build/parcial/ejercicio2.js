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
console.log('VIII. Dividir una cadena de texto en el array de frutas y luego volver a unirlas en una cadena separada por comas', '\n');
const divideText = fruitsName[0].join(' ');
console.log(divideText, '\n');
const text = fruitsName[0].join(', ');
console.log('La cadena de texto es: ', text, '\n');
console.log('IX. encontrar el primer numero mayor que 25 en el array [10,20,30,40,50]', '\n');
const arrays2 = [[10, 20, 30, 40, 50, -16]];
const findNumMajT25 = arrays2[0].find((num) => num > 25);
console.log('El nuevo array de numeros es: ', arrays2, '\n', ' y el primer numero mayor que 25 es: ', findNumMajT25, '\n');
console.log('X. Verificar si los numeros del nuevo array son positivos', '\n');
if (arrays2[0].every((num) => num > 0)) {
    console.log('Todos los numeros son positivos');
}
else {
    const negativeNumbers = arrays2[0].filter((num) => num <= 0);
    console.log('No todos los numeros son positivos, El numero negativo es: ', negativeNumbers, '\n');
}
console.log('XI. Verificar si algun numero del array es mayor que 40');
const someNumMajT40 = arrays2[0].some((num) => num > 40);
console.log('Algun numero del array es mayor que 40: ', someNumMajT40, '\n');
console.log('XI2.0. verificacion si algun numero del array es mayor que 40');
if (arrays2[0].every((num) => num < 40)) {
    console.log('Ningun numero es mayor a 40', '\n');
}
else {
    const numMajT40 = arrays2[0].find((num) => num > 40);
    console.log('Numero mayor que 40 es: ', numMajT40, '\n');
}
console.log('XII. combinar los arrays [1,2,3] y [4,5,6]', '\n');
const array1 = [[1, 2, 3]];
const array2 = [[4, 5, 6]];
const combArrays = array1[0].concat(array2[0]);
console.log('El  array combinado es: ', combArrays, '\n');
console.log('XIII. ordena el array [5,1,4,2,3] de menor a mayor y luego revertir el orden', '\n');
const array4 = [[5, 1, 4, 2, 3]];
const sortedArray = array4[0].sort((a, b) => a - b);
console.log('El array ordenado es: ', sortedArray, '\n');
const reverso = sortedArray.reverse();
console.log('El array invertido es: ', reverso, '\n');
//# sourceMappingURL=ejercicio2.js.map