const express = require('express');
const { model } = require('mongoose');
const homeRoute = express.Router();

homeRoute.get('/',(req,res)=>{
    res.send('home')
});


module.exports = homeRoute;