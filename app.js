require('dotenv').config();

const express = require('express')

const cors = require('cors')

const connectdb = require('./config/db.js')

const app = express();

// express midleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// init connecttoDb

connectdb()


// routes 
const userRoutes =require('./routes/userRoutes.js')

app.get('/',);

module.exports = app;

