// const request = require('request')
// const forecast = (longitude,latitude,callback) => {
//     const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=3c6339d852c414e847cb4959867e0970&units=metric'

//     request ({ url:url, json:true} ,(error, response) => { //call back function take two parameters
//         if(error){
//             callback('Unable to connect to weather service!', undefined)
//         }
//         else if(response.body.error){ //else statement is not working i used here response.statusCode === 404 and (response.body.cod !== 200) then also it's not working
//             callback('Unable to find location.', undefined)
//         }
//         else{
//             callback(undefined, 'It is currently ' + response.body.main.temp + ' degrees out. It feels like ' + response.body.main.feels_like + ' degrees out.')
//         }
//     })
// }
// module.exports = forecast

//challenge 40.app.js

const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=3c6339d852c414e847cb4959867e0970&units=metric';

    request({ url, json: true }, (error, { body } = {}) => { // Destructured body with a default value
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.cod !== 200) { // Checked for API response error using body.cod // //else statement was not working when i used here body.error but when i used body.cod !== 200 then it worked
            callback('Unable to find location.', undefined);
        } else {
            callback(undefined, 'It is currently ' + body.main.temp + ' degrees out. It feels like ' + body.main.feels_like + ' degrees out.');
        }
    });
}

module.exports = forecast;


//What Changed:
//1.Destructuring in request callback:
//Before: The callback received the entire response object.
// After: The callback destructures the body property directly from the response object.
// Why: This makes the code cleaner and easier to read by directly accessing the required part of the response.

//2.Destructuring and property shorthand:
// Before: Individual properties would be accessed and assigned separately.
// After: Used destructuring to extract temp and feels_like from body.main and used them directly in the callback message.
// Why: Simplifies the code and makes it more concise.

// Why These Changes Were Made
//1.Destructuring:
// Improves code readability by allowing direct access to the properties we need without having to access them through an intermediate object.
// Reduces the amount of code needed to access nested properties.

//2.Property Shorthand:
// When an object property name matches the variable name, shorthand notation allows for more concise code.
// Enhances readability by reducing redundancy in the code.

// How These Changes Affect the Code
// Readability: The code becomes cleaner and more readable, making it easier to understand and maintain.
// Conciseness: Less code is needed to achieve the same functionality, reducing the potential for errors and making it easier to spot issues.
// Efficiency: By directly accessing and using the necessary properties, the code runs more efficiently without unnecessary intermediate steps.