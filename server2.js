import { createServer } from 'http'
const PORT = process.env.PORT


const users = [
    {id: 1, name: 'Hassell', age: 21},
    {id: 2, name: 'Paul', age: 22},
    {id: 3, name: 'Greg', age: 27},
    {id: 4, name: 'John', age: 25}
];


const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');

        if (user) {
        res.statusCode = 200;
        res.write(JSON.stringify(user));
        } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not Found' }));
        }
        res.end();
    } else {
        res.setHeader('Content-type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'Not Found' }));
        res.end();
    }
});


server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})