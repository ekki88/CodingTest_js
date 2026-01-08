const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim()

const en = 'abcdefghijklmnopqrstuvwxyz'

const result = []
for (let ch  of en) {
  result.push(input.indexOf(ch));
}
console.log(result.join(' '))