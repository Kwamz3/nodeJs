import http, { STATUS_CODES } from 'http'
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get current path
// gives you the current filename and the path
const __filename = url.fileURLToPath(import.meta.url); 

// gives you the directory in which the file can be found
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {

    // you can send a response body through the "res.end"
    // res.write("Hello World!")

    // console.log(req.url);
    // console.log(req.method);
    
    // res.setHeader('Content-type', 'text/html')
    // res.writeHead(200, {'Content-Type': 'text/html'})
    // res.end('<h1>Hello World!</h1>')
    
    // you can use "writeHead" to pass the status code and the Context type at a go
    // res.writeHead(500, { 'Content-Type': 'application/json'});
    // res.end(JSON.stringify({ message: 'Server Error' }))

    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'content-type': 'text/html'});
                res.end('<h1>Homepage</h1>')
            } else if (req.url === '/about') {
                res.writeHead(200, {'content-type': 'text/html'});
                res.end('<h1>About</h1>')
            } else {
                res.writeHead(404, {'content-type': 'text/html'});
                res.end('<h1>Not Found</h1>')
            } 
        } else {
            throw new Error('Method not allowed')
        }
    } catch (error) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('Server Error')
    }


})

server.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})