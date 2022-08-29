const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const routes = require('./routes/user')
const bodyParser = require("body-parser")


app.use(bodyParser())
// routes
app.use('/',routes) 
//connection to DB
// mongoose.connect('mongodb://localhost:27017/user_db', {useNewUrlParser: true})
mongoose.connect(process.env.DB_CONNECTION)
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database Connect Error' ))
db.once('open', ()=> { 
    console.log('Database is Connected');
})
//listen
app.listen (process.env.PORT, ()=>{
    console.log(`Server Running in ${process.env.PORT}`);
})