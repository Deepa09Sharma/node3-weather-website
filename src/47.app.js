const path = require('path')// it will show path same as dirname
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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

 // challenge
 // goal:create a template for help page
 //1.setup a help template to render a help message to the screen
 //2.setup the help route and render the template with an example message
 //3.visit the route in the browser and see your help message print