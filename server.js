import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer( (req, res) => {
    try {
if(req.method === 'GET') {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Hompage<h1>');
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About<h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Not Found<h1>');
    }
} else {
    throw new Error('Method Not Allowed')
}
    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.end('<h1>Server Error<h1>');
    }
   
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('Hi World!');
    // res.end('<h1>Hello World!</h1>');
    // res.writeHead(500, {'C0ntent-Type': 'application/json'});
    // res.end(JSON.stringify({ message: 'Server Error'}));

    // console.log(req.url);
    // console.log(req.method);


    // res.writeHead(200, {'C0ntent-Type': 'text/html'});
    // res.end('<h1>Hello World<h1>');

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});