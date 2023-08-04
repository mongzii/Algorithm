let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].trim().split(" ");
let count = 0;

for(let i=0; i < data.length; i++){
    if(data[i] !== ""){
        count ++;
    }
}
console.log(count);