const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use. Please choose a different port.');
  } else {
    console.error('An error occurred:', err);
  }
  process.exit(1); // Exit the process with an error code
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});