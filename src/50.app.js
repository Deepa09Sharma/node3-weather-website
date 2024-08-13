//partials can represent specific sections of a webpage, such as headers, footers, or sidebars. Including a partial in a view is achieved through a simple syntax, enhancing code organization.

const path = require('path')// it will show path same as dirname
const express = require('express')
const hbs = require('hbs')

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

 // all the views are from video 47 only 

 //challenges
 // goal: create and render a 404 page with handlebar
 //1. setup the template to render the header and footer
 //2. setup the template to render an error message in a paragraph
 //3. render the template for both 404 routes
 // - page not found
 // - help artical not found.
 //4. tedt your work. visit /what and /help/units

