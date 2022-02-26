let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input[0]);

// 운년이면 1 아니면 0
// 윤년은 4의 배수 이면서
// 100의 배수가 아닐때 또는 400의 배수일떄

if (a % 4 === 0) {
    if (a % 100 !== 0) {
        console.log(1);
    } else if (a % 400 === 0) {
        console.log(1);
    }
    else {
        console.log(0);
    }
} else {
    console.log(0);
}