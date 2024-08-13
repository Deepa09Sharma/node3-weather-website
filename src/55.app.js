//partials can represent specific sections of a webpage, such as headers, footers, or sidebars. Including a partial in a view is achieved through a simple syntax, enhancing code organization.

const path = require('path')// it will show path same as dirname
const express = require('express')
const hbs = require('hbs')
const geocode = require('./55.utils/geocode') // 1 step
const forecast = require('./55.utils/forecast')// 1 step

const app = express()

// define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') // for changing directory from view to templates
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // change after chainging folder name
hbs.registerPartials(partialsPath)// HBS dot register partials.Register partials takes a path to the directory where your partials live.

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name:'Deepa'
    })
})
app.get('/about', (req, res) => {
    res.render('about' , { 
        title:'about me',
        name:'Deepa'
    })
})

app.get('/help', (req, res) => {
    res.render('help' , { 
        title:'Hi',
        name:'Deepa'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address) {
        return res.send({
            error:'you must give an address'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location} = {}) => { // we are adding ={} Error is provided in that case.Now the problem here is that we're still trying to destructure this object.To fix that, all we do is we set up an empty object default value.
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address:req.query.address
            })    
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
       return res.send({ // we printer return here inthe place of else means if there will be any error then the program will spot running and it will not execute next products code
            error: "you must provide a search term"
        })
    }
    console.log(req.query.search) // if will gsearch this in browser http://localhost:3000/products?search=games&rating=5 , then we have to write this code ato see this in terminal
    res.send({
        products:[]
    })
})

app.get('/help/*', (req,res) => {
   // res.send('help article not found')
   res.render('404' , { 
    title:'404',
    name:'Deepa',
    errormessage:'help article not found'
    })
})


// if no match found it will run
app.get('*', (req,res) => { //  me everything match what every you write localhost:3000/me
   // res.send('My 404 page')
   res.render('404' , { 
    title:'404',
    name:'Deepa',
    errormessage:'page not found'
    })
})

app.listen(3000, () => {
console.log('server is up on port 3000.') //Now this message is never gonna display This is just gonna display as a useful piece of information when running the application.to someone in the browser.
 })


// challenges
//goal: wire up /weather
//1.require geocode/forecast into app.js
//2.use the address to geocode
//3.use the coordinates to get forecast
//4.send back the real forecast and location