const fs = require('fs');
const file = fs.readFile('./txt/input.txt','utf-8',(err,data) => {
        if (err)
        {
            console.log("Error Reading File",err);
        }

        

        console.log(`this is a testing readwrite js node ${data} statement ${Date.now()}`);
});





