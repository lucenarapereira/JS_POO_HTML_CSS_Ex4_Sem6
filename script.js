var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Array: ' + arrayNumeros) 

var encontrado = [];
encontrado = arrayNumeros.find(element => element > 5);
console.log('Array Encontrado: ' + encontrado) 
