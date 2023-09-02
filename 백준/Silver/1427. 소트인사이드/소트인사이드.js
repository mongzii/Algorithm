let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0]; //일단 수를 입력받기
let cnt = Array(10).fill(0); //일단 모든자리를 0으로 셋팅

for(let x of n){
    cnt[Number(x)]++;
}
let answer ="";
for(let i=9; i>=0; i--){
    for(let j=0; j<cnt[i]; j++) answer += i + "";
}
console.log(answer);