const express=require('express')
const hbs=require('express-handlebars')
const dotenv=require('dotenv')

dotenv.config()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//express-handlebarsni o'rnatish
app.engine('.hbs', hbs.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

const PORT=process.env.PORT

//Bosh sahifa
const home=require('./routers/home')
app.use('/home', home)

//404 not faund
app.use((req,res)=>{
    res.send(`<h1 align="center">404 Not Faund</h1>`)
})
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})