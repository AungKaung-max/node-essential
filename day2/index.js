const fs = require('fs');
const http = require('http');
const { json } = require('stream/consumers');

// const data = fs.readFileSync('./dev-data/data.json','utf-8');

// const result = JSON.parse(data);


// for(let x in result)
//     {
//         if(result[x].id == 2)
//             {
//                 console.log(result[x]);
//             }
//     }

server = http.createServer((req,res) => {
    
    if(req.url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("This is index Page");
    }
    else if(req.url === '/overview') {   
            fs.readFile('./templates/overview.html','utf-8',(err,data) => {
                    if(err) throw err;
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.end();
            });
        }
        
        else if (req.url === '/product'){
                      const data =  fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
                      res.writeHead(200,{'Content-type':'application/json'});
                      res.end(data);
                }
                else {
                        res.writeHead(404,{'Content-type':'text/html'});
                        res.end("404 Not Found");
                }
        
});

server.listen(8080,'localhost',() => {
        console.log("listening to port 8080");
});

