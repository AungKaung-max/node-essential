const http = require ('http');

const server = http.createServer((req,res) => {
    res.write("hello from the server!");
    res.end();
}); 

server.listen(7000,'127.0.0.1',() => {
    console.log("listening");
});