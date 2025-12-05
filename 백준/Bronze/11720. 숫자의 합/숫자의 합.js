const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const numbers = input[1];

let sum = 0;

for (let i = 0; i < N; i++) {

    sum += Number(numbers[i]); 
}

console.log(sum)