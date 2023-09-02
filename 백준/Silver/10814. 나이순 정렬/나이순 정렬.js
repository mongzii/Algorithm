let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let arr = [];

for(let i=1; i<= n; i++){
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    arr.push([age, name]);
}
arr.sort((a,b) => a[0] -b[0]);

let result ="";
for(let x of arr) result += x[0] + " " + x[1] + "\n";
console.log(result);