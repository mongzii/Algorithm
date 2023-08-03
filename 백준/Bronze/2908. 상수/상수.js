let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//input은 현재 string이다.
//split은 string을 일정한 구분자로 잘라서 배열로 저장한다.

let a = input[0].split(' ')[0];
let b = input[0].split(' ')[1];

let newA = a[2] + a[1] + a[0];   //string이니까 가능하다
let newB = b[2] + b[1] + b[0];

console.log(Math.max(Number(newA), Number(newB))) ;