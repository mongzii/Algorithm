let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

//등차수열의 합 공식
console.log(n * (n+1) / 2);