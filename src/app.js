const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()


// Defined paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') // to customize the name from 'public' to 'src'
const viewsPath = path.join(__dirname, '../templates/views') // to customize the name from 'views' to 'templates'
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // to set up handlebars(to create dynamic templates)
app.set('views', viewsPath) // to customize the name from 'views' to 'templates'
hbs.registerPartials(partialsPath); // to register partials

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)) // works without this line also

app.get('', (req, res) =>
{
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) =>
{
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) =>
{
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) =>
{
    if (!req.query.address)
    {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) =>
    {
        if (error)
        {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) =>
        {
            if (error)
            {
                return res.send({ error })
            }

            res.send(
                {
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
        })
    })
})


app.get('/products', (req, res) =>
{
    if (!req.query.search)
    {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) =>
{
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => // '*' is a wild card character. It means match anything that hasn't been matched so far. Thus it must come last.
{
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    }

    )
})

app.listen(3000, () =>
{
    console.log('Server is up on port 3000.');
}) 