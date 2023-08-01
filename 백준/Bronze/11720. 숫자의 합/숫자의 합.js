let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let j = input[1];

let answer = 0;
for(let x of j){
  answer = answer + Number(x);
}
console.log(answer);