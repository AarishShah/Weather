const express = require('express') // variable express stores a fn, not an object

const app = express()

// app.get('1st Parameter of this fn is Partial route, url', (/*first parameter of this fn is an object(which has information about incoming request to the server) this is normally called a request(or req in short)*/, /*the other arguement is response(What I am going to send back to the requester.This is called response(or res in short))*/) => {
// })

app.get('', (req, res) => {

    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('View weather')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
}) // 3000 us a common development port, http based website is 80.