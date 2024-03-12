const express = require('express');
const app = express();
const homeRoute = require('./routes/home');

app.use('/',homeRoute);

const port = 3000;
app.listen(port,()=>{

})