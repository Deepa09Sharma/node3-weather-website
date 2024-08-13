// const path = require('path')// it will show path same as dirname
// const express = require('express')

// //console.log(__dirname,) // double _ _ underscore is used without gape
// //console.log(__filename)// it will show in which file
// //console.log(path.join(__dirname, '../public'))// path.join is a function and it will return the final path, in second will defined a string so, .. means it will show the up folder web-server and if will use the ../.. to show the one more up folder node_module now if we want to go to the single folder getting out of the source directory then will use ../public  

// const app = express()

// //we can use this or down one
// //app.use(express.static(path.join(__dirname, '../public')))// it is use to customize the sever

// const publicDirectoryPath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectoryPath))

// app.get('',(req,res) => {
//     res.send('<h1>hello express!</h1>') // to run in chrome write localhost:3000
// })// it is showing in html way


// app.get('/help', (req,res) => {
//     res.send([{
//         name:'Andrew'
//     },
//     {
//         name:'sarah'
//     }]) // to run in chrome write localhost:3000/help
// })


// app.get('/about', (req,res) => {
//     res.send('<h1>about page<h1>')
// })

// app.get('/weather', (req,res) => {
//     res.send({
//         forecast:'sunny',
//         location:'patna'
//     })
// })

// app.listen(3000, () => {
//     console.log('server is up on port 3000.') //Now this message is never gonna display This is just gonna display as a useful piece of information when running the application.to someone in the browser.
// })

// //You can name the file anything you want, but index.html is the default file that the web server serves when you access the root URL (/). When you have a file named index.html in your public directory, it is served automatically without specifying the file name in the URL.
// //If you name your file something else, you'll need to specify the file name in the URL. For example:
// //If you name your file home.html instead of index.html, you would need to access it via http://localhost:3000/45.index.html.

//challenge
//goal:create two more html file
// 1.create a html page for about with "about" title
// 2.create a html page for help with "help" title
// 3.remove the old route handlers for both
// 4.visit both in the browser to test your work

const path = require('path')// it will show path same as dirname
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.listen(3000, () => {
console.log('server is up on port 3000.') //Now this message is never gonna display This is just gonna display as a useful piece of information when running the application.to someone in the browser.
 })