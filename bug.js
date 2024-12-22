const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Error Handling Missing
//The above code lacks proper error handling. If there is an issue while creating the server or listening on the port, the application will crash without providing any insights. For example, if port 8080 is already in use, the application will simply exit without any meaningful error message.