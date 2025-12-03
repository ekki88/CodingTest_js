let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const number = input.slice(1)

const numbers = number.sort((a,b)=> a-b)

console.log(numbers.join('\n'))