import http, { STATUS_CODES } from 'http'
const PoRT = process.env.PoRT;

const server = http.createServer((req, res) => {

    // you can send a response body through the "res.end"
    // res.write("Hello World!")
   
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Hello World!</h1>')

    // you can use "writeHead" to pass the status code and the Context type at a go
    // res.writeHead(500, { 'Content-Type': 'application/json'});
    // res.end(JSON.stringify({ message: 'Server Error' }))
})

server.listen(PoRT, () => {
    console.log(`Server is running on: ${PoRT}`)
})