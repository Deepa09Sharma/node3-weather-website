const path = require('path')// it will show path same as dirname
const express = require('express')
const app = express()

// define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates') // for changing directory from view to templates

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) // change after chainging folder name

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