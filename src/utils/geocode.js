const request = require('request')

const geocode = (address, callback) => {

    const url = 'http://api.positionstack.com/v1/forward?access_key=8148c4a2f85572c17228c22de7020c63&query= ' + encodeURIComponent(address) // safe url

    request({ url: url, json: true }, (error, { body } = response) => {
        if (error) // means no response
            callback('Unable to connect to location services!', undefined)

        else if (body.error) // we got response but response had an error mentioned in it
            callback('Unable to find location. Try another keyword.', undefined)

        else
            callback(undefined,
                {
                    latitude: body.data[0].latitude,
                    longitude: body.data[0].longitude,
                    location: body.data[0].country
                })
    })

}

module.exports = geocode;