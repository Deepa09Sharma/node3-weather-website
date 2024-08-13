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

app.listen(3000, () => {
console.log('server is up on port 3000.') //Now this message is never gonna display This is just gonna display as a useful piece of information when running the application.to someone in the browser.
 })

 // all the views are from video 47 only 
 // we changed the folder name from views to templates in video 48.app.js
 // in video 49 we creates two more folder in templates folder one is partials and second is views and then in views we moved all the file again files are about,help and index

 //challenge
 //1.setup the template for the footer partial "created by some name"
 //2.render the partial at the bottom of all three pages
 //3.test your work by visiting all three pages