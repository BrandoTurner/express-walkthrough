const express = require('express')
const app = express()


require('dotenv').config()
const fruits = require("./fruits")

const PORT = process.env.PORT || 4000

//routes
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/response-content',(req,res) =>{
    res.send('Welcome to mi webpage')
})

app.get('/favorite-food',(req,res) =>{
    res.send('melon')
})

app.get('/favorite-movie',(req,res) =>{
    res.send('The Incredibles')
})

app.get('/contact',(req,res) =>{
    res.send('contactbrandos@gmail.com')
})
app.get('/about-me',(req,res) =>{
    res.send('im an aspiring developer!')
})

app.get('/article/:slug',(req,res) =>{
    console.log(req.params)
})

app.get('/ping', (req, res) => {
	res.json('pong');
})
app.get('/greet/:name', (req, res) => {
    let name = req.params.name;
    let msg = `Hello ,${name}. Welcome to the darkweb.`
	res.send(msg);
})
app.get('/five', (req, res) => {
	res.send([1,2,3,4,5]);
})
app.get('/evens/:n', (req, res) => {
    const n = (req.params.n)
    let evens = []
    for( let i = 2 ; i <= n; i++){
        i % 2 == 0 ? evens.push(1) : null
    }
	res.send('evens');
})

app.get('/namelength/:name', (req, res) => {
    let length = req.params.name.length;
	res.json(length);
})
app.get('/fruits', (req, res) => {
	res.send(fruits);
})
app.get("/fruits/:name", (req,res) => {
    res.send(fruits.filter(fruit => fruit.name === req.params.name ? fruit: null))
})









app.listen(PORT, () => console.log(`running on port ${PORT}`)) 