const path = require('path')
const express = require('express')

console.log(__dirname); // this helps us find asbsolute path
console.log(path.join(__dirname, '../public')); // '..' goes up a folder relative to absolute path 

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


// The above line calls index.html already so we don't need the below fn anymore
// app.get('', (req, res) => {

//     res.send('<h1>Weather</h1>')
// })


// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Andrew',
//         age: 17
//     },
//     {
//         name: 'Garfield',
//         age: 27
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'India'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})