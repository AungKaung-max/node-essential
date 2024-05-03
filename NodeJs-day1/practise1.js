const fs = require('fs');
const file = fs.readFileSync('txt/input.txt','utf-8');

const output = fs.writeFileSync('txt/output.txt','Extra option');
console.log(file);
// console.log(output);