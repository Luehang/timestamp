const hostname = '127.0.0.1';
const port = 3000;
const router = require('./router');
const http = require('http');

const server = http.createServer((req, res) => {
  router.naturalConversion(req, res);
  router.unixConversion(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
