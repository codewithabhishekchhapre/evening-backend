const { createServer } = require('http');
const { parse } = require('url');


const server = createServer((req, res) => {
     // const url = parse(req.url, true);
     // const method = req.method;
     
     // if(method === 'GET' && url.pathname === '/api') {
     //      console.log("abhi")
     //      res.end(JSON.stringify({ message: 'Welcome to the API' }));
     // }
     // else {
     //      res.statusCode = 404;
     //      res.end(JSON.stringify({ error: 'Not found' }));
     //    }

     res.end(JSON.stringify({
          message: 'Welcome to the API',
     }));

});

server.listen(3000, () => {
     console.log('Server is running on port 3000');
})