const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let tempArr = [a, b, c];
    let resultArr = [];

    process.exit();
});