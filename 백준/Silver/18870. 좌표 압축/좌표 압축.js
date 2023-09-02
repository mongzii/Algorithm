let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
//set으로 변경해 중복값을 없앤뒤에 다시 배열로 변환 
let uniqueArray = [...new Set(arr)];
uniqueArray.sort((a,b)=> a-b);
//0부터 차례대로 매핑 수행
let myMap = new Map();
for(let i=0; i<uniqueArray.length; i++){
    myMap.set(uniqueArray[i], i);
}
answer = "";
for(x of arr) answer += myMap.get(x) + " ";
console.log(answer);

