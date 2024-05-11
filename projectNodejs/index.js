const fs = require('fs');
const http = require('http');
const url = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/template/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/template/template-card.html`,'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

const dataObj = JSON.parse(data);




const replaceTemplate = (template,product) => {
    let output = template;
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    return output;
};

const server = http.createServer((req,res) => {
    const { query, pathname } = url.parse(req.url, true);
    if(pathname === '/' || pathname === 'overview')
        {
            const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
            const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
            res.end(output);
        }
    else
    {
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('Page Not Found!');
    }
});

server.listen(9000,'localhost',() => {
    console.log("Server Ready!");
})