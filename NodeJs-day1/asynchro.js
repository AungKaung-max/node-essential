const fs = require('fs');

fs.readFile('txt/output.txt','utf-8',(err,data1) => { 
            if(err) console.log("error!");
        fs.readFile(`txt/${data1}.txt`,'utf-8',(err,data2) => {
            console.log(data2);
            fs.readFile('txt/example.txt','utf-8',(err,data3) => {
                console.log(data3);
                fs.writeFile('txt/final.txt',`${data2}\n ${data3}`,(err)=>{
                    console.log("write succcess");
                });

            });
        });
}); 

console.log("Non-blocking-test");