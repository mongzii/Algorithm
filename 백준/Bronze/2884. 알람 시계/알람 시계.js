//45분 일찍 알람설정하기 

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//M이 45보다 크면 h는 그대로 이고 M-45
//M이 45보다 작으면 H는 h-1이고 M은 45-m
//h가 0이면 h는 23되고 m은 45-m이다

let hour = Number(input[0].split(' ')[0]);
let minute = Number(input[0].split(' ')[1]);

if (minute < 45) {
    hour -= 1;
    minute += 15;
    if(hour < 0) hour = 23;
}
else minute -= 45;

console.log(hour + " "+ minute);
