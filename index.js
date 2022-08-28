const { readFileSync } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const home = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
