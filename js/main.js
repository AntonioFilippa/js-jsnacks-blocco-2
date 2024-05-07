// Crea due array con un numero diverso di elementi
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7,8,9];


console.log(array1)
console.log(array2)

do{
    array1.push(Math.floor(Math.random() * 10) + 1)
}

while( array1.length < array2.length)

    console.log( array1)