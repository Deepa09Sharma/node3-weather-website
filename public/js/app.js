//we are using src folder file 55.app.js

//video 46
//console.log('Client side javascript file is loaded!')

// video 57
//fetch('https://puzzle.mead.io/puzzle').then((response) => {
  //  response.json().then((data) => {
    //    console.log(data)
   // })
//})

// challenge 
// goal fetch weather!
// 1.setup a call to fetch to fetch weather for boston
// 2.get the parse json response
// - if error property, print error
// - if no error property, print location and forecast
// 3. refresh the browser and test your work 

// fetch('http://localhost:3000/weather?address=boston').then((response) => { //.then((response) => { // When the response is received, this function is executed
//     response.json().then((data) => { // Convert the response to JSON and execute this function with the JSON data
//       //code to handle the data will go here
//         if(data.error) {
//             console.log(data.error)
//         }
//         else{
//         console.log(data.location)
//         console.log(data.forecast)
//         }
//     })
// })

// video 58 creating a search form

// const weatherForm = document.querySelector('form')
// // Now in this case, we need to pass in two arguments.The first is a string,the name of the event we're trying to listen for.
// // As I mentioned, there are dozens of different events that are supported.And the second is a callback function which runs 
// // every single time that event occurs.In our case, the name of the event is submit and the function is gonna run every single time the form is submitted.
//  weatherForm.addEventListener('submit', (e) => { //() event call back
//     e.preventDefault() // Prevent default is going to prevent that default behavior,which is to refresh the browser,allowing the server to render a new page and instead, it's gonna do nothing.It's just going to allow us to do whatever we want by letting the function run.So with our code change in place and the file saved,we can refresh the browser.I'm gonna type in something like my location.I'm gonna click that search button.And what happens? I see testing print down below which is great and the browser isn't refreshed.
//     console.log('testing!')
//  })




// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
//  weatherForm.addEventListener('submit', (e) => { 
//     e.preventDefault()
//     // after the user submit the form will get the from here
//     const location = search.value
//     console.log(location)
// })




// challenge
// goal: use input value to get weather
// 1. migrate fetch call into the submit callback
// 2. use the search text as the address query string value
// 3. submit the form with a valid and invalid value to test

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
//  weatherForm.addEventListener('submit', (e) => { 
//     e.preventDefault()
//     // after the user submit the form will get the from here
//     const location = search.value

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         console.log(response) //.then((response) => { // When the response is received, this function is executed
//         response.json().then((data) => { // Convert the response to JSON and execute this function with the JSON data
//           //code to handle the data will go here
//             if(data.error) {
//                 console.log(data.error)
//             }
//             else{
//             console.log(data.location)
//             console.log(data.forecast)
//             }
//         })
//     })
// })

// video 59 wiring up the user interface 

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')

// messageOne.textContent = 'From JavaScript'

//  weatherForm.addEventListener('submit', (e) => { 
//     e.preventDefault()
//     // after the user submit the form will get the from here
//     const location = search.value

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         console.log(response) //.then((response) => { // When the response is received, this function is executed
//         response.json().then((data) => { // Convert the response to JSON and execute this function with the JSON data
//           //code to handle the data will go here
//             if(data.error) {
//                 console.log(data.error)
//             }
//             else{
//             console.log(data.location)
//             console.log(data.forecast)
//             }
//         })
//     })
// })

//challenge
// 1. select the second message p from javascript
// 2. just before fetch, render loading message for first paragraph and empty paragraph for second pharagraph
// 3. if error, render error
// 4. if no error, render location and forecast
// 5. test your work! search for error and for valid location

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'

//  weatherForm.addEventListener('submit', (e) => { 
//     e.preventDefault()
//     // after the user submit the form will get the from here
//     const location = search.value

//     messageOne.textContent = 'Loading...'
//     messageTwo.textContent = ''

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         console.log(response) //.then((response) => { // When the response is received, this function is executed
//         response.json().then((data) => { // Convert the response to JSON and execute this function with the JSON data
//           //code to handle the data will go here
//             if(data.error) {
//                 messageOne.textContent = data.error
//             }
//             else{
//                 messageOne.textContent = data.location
//                 messageTwo.textContent = data.forecast
//             }
//         })
//     })
// })

// video 63
//console.log(hi)

//video 67 for render app change

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'From JavaScript'

 weatherForm.addEventListener('submit', (e) => { 
    e.preventDefault()
    // after the user submit the form will get the from here
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        console.log(response) //.then((response) => { // When the response is received, this function is executed
        response.json().then((data) => { // Convert the response to JSON and execute this function with the JSON data
          //code to handle the data will go here
            if(data.error) {
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})