let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let summary = 0;

for(let i=1; i <= n; i++){
    summary = summary + i;
}
console.log(summary);