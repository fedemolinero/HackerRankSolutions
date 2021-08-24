// EXERCISE 
// check occurrencies on this list against another one and 
// return the result number of each repetition on a list unformatted

// DE DOS LISTAS DE NOMBRES, UNA ES UN ARRAY DE NOMBRES, Y LA OTRA SON NOMBRES UNICOS
// CHEQUEAR QUE LOS NOMBRES UNICOS ESTEN INCLUIDOS EN LA LISTA Y CUANTAS VECES SE REPITEN

// 'use strict';

const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// process.stdin.on('data', function (inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function () {
//     console.log('getsin');

//     main();
// });

function readLine() {
    console.log('getsin');
    return inputString[currentLine++];
}


/*
 * Complete the 'findCompletePrefixes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY names
 *  2. STRING_ARRAY query
 */

function findCompletePrefixes(names, query) {

    return names;
    // Write your code here

}

function main() {
    console.log('starts');

    let names = ['jhon', 1, 2, 0, 'fede', 'fedex', 'fedexito', 'mati', 'matias', 'matuqui', 'lucia', 'luciana', 'lucio'];

    let query = ['fede', 'mati', 'luci'];

    console.log('result', query);

    const result = findCompletePrefixes(names, query);

    console.log('result IS', result);

    console.log('result SHOULD BE etc', [1, 2, 3]);


}


main();