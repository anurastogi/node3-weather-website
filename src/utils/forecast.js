const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/49b11e70dadb482055ab23636cfd3260/' +latitude +','+longitude
    request( { url, json: true}, (error, {body}) => {
        if(error){
            callback ('Unable to connect to forecast service!', undefined)
        } else if(body.error) {
            callback (' Coordinate error', undefined)
        } else {
            callback (undefined, body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degrees out. There is '+body.currently.precipProbability+'% chance of '+body.currently.precipType+'.')
        }
    })
}

module.exports = forecast
