import { createServer } from 'http'
const PORT = process.env.PORT


const users = [
    {id: 1, name: 'Hassell', age: 21},
    {id: 2, name: 'Paul', age: 22},
    {id: 3, name: 'Greg', age: 27},
    {id: 4, name: 'John', age: 25}
];


const server = createServer((req, res) => {

});





server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})