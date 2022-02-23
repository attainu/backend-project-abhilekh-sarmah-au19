const express = require("express");
const bodyParser = require("body-parser");
const app = express()

var dbconnection = require('./db')

var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')
// const path = require('path')
app.use(bodyParser.json());
app.use('/api/products/', productsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', orderRoute)



const port = process.env.PORT||8000; 
app.get("/", (req, res)=> {

    res.send('This is From Backend')
});

app.listen(port,()=>console.log(`listening on localhost:${port}`));

