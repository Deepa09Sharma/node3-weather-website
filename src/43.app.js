const express = require('express')
const app = express()

//It is, app.get.This lets us configure what the server should do when someone tries to get the resource at a specific URL.Maybe we should be sending back HTML, or maybe we should be sending back JSON.
//Now the get method, which we're gonna use a ton throughout the class, takes in two arguments.The first is the route, so the partial URL, that would be nothing for this first example, /help, for the 
//second, or, /about for the third.And it also takes in a function.Now the function is where we describe, what we wanna do when someone visits this particular route.

// for req and res => Now this function gets called with two very important arguments.The first is an object containing information about the incoming request to the server.This is commonly called REQ, which is short for request.
//You'll see this used throughout the documentation.The her argument is the response.So this contains a bunch of methods allowing us to customize what we're gonna send back to the requester.This is commonly called RES, which is short for response.

app.get('',(req,res) => {
    res.send('hello express!') // to run in chrome write localhost:3000
})

app.get('/help', (req,res) => {
    res.send('help page') // to run in chrome write localhost:3000/help
})

app.get('/about', (req,res) => {
    res.send('about page')
})

app.get('/weather', (req,res) => {
    res.send('weather page')
})

app.listen(3000, () => {
    console.log('server is up on port 3000.') //Now this message is never gonna display This is just gonna display as a useful piece of information when running the application.to someone in the browser.
})

//for running the program src/43.app,js
//for closing the server ctrl+c
//every time we need to do this after change take place 
//so, will use nodemon 
//so, will write nodemon src/43.app.js

// challenge
// gole:setup two route 
//1. setup an about route and render a page title
//2. setup a weather route and render a page title
//3. test your work by visiting both in the browser