const fs = require('fs');
const http = require('http');
const url = require('url');

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);


const file = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');

const dataObj = JSON.parse(file);



  function replaceTemplate(template,product){
    const  data = {
      IMAGE:product.image,
      PRODUCTNAME:product.productName,
      QUANTITY:product.quantity,
      PRICE:product.price,
      ID:product.id,
      NUTRIENTS:product.nutrients,
      FROM:product.from,
      DESCRIPTION:product.description
        };
    let output = template;
    for(const key in data)
      {
        var temp = `{%${key}%}`;
        // console.log(temp);
        output = output.replace(new RegExp(temp,'g'),data[key]);
      }
      return output;
  }



const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
  
    // Overview page
    if (pathname === '/' || pathname === '/overview') {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
  
      const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
      const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
      res.end(output);
  
      // Product page
    } else if (pathname === '/product') {
      res.writeHead(200, {
        'Content-type': 'text/html'
      });
      const product = dataObj[query.id];
      console.log(product);
      const output = replaceTemplate(tempProduct, product);
      res.end(output);
  
      // API
    } else if (pathname === '/api') {
      res.writeHead(200, {
        'Content-type': 'application/json'
      });
      res.end("This is api");
  
      // Not found
    } else {
      res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world'
      });
      res.end('<h1>Page not found!</h1>');
    }
  });
  
  server.listen(7000,'localhost',() => {
    console.log("server is ready");  
})