const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5a91ba5782283ff61897ce49f8a4f461&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, { body } = response) => {
        if (error) // means no response
            callback('Unable to connect to weather service!', undefined);

        else if (body.error) // we got response but response had an error mentioned in it
            callback('Unable to find location!', undefined);

        else
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees. There is a " + body.current.precip + "% chance of rain.");

    })
}

module.exports = forecast;