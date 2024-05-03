const fs = require('fs');

const file = fs.readFileSync('../input.txt','utf-8');
console.log("Date read from the file",file);

fs.writeFileSync('example.txt',file);
console.log("Date write successfully");