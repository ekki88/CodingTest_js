const fs  = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split("\n");

const N = Number(input[0]);

const numbers = input[1].split(' ').map(Number);

const M = Math.max(...numbers)

let sum = 0
for (let i=0; i < N ; i++) {
    sum += (numbers[i] / M) *100
}

console.log(sum / N);

