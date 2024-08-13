// const request = require('request')
// const geocode = (address,callback) => {
//     const url = 'https://us1.locationiq.com/v1/search?key=pk.a2621c1d64ddb0075d7d8b4d4e92d7ae&q=' + encodeURIComponent(address) + '&format=json'

//     request ({ url:url, json:true} ,(error, response) => { //call back function take two parameters
//         if(error){
//             callback('unable network connection', undefined)
//         }
//         else if(response.body.error){
//             callback('no matching result. try another search', undefined)
//         }
//         else{
//             callback(undefined, {
//                 latitude:response.body[1].lat,// it was [0] early but in app.js need to use [1]
//                 longitude:response.body[1].lon,// it was [0] early but in app.js need to use [1]
//                 location:response.body[0].display_name
//             })
//         }
//     })
// }
// module.exports = geocode

// challenge in 40.app.js

const request = require('request')
const geocode = (address,callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.a2621c1d64ddb0075d7d8b4d4e92d7ae&q=' + encodeURIComponent(address) + '&format=json'

    request ({url, json:true} ,(error, { body } = {}) => { //call back function take two parameters  // change here
        if(error){
            callback('unable network connection', undefined)
        }
        else if(body.error){ // change here
            callback('no matching result. try another search', undefined)
        }
        else{
            callback(undefined, {
                latitude:body[1].lat,// it was [0] early but in app.js need to use [1] // change hare
                longitude:body[1].lon,// it was [0] early but in app.js need to use [1] //change here
                location:body[0].display_name // change here
            })
        }
    })
}
module.exports = geocode