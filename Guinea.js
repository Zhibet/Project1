const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello the comit worked')
})
const port = 3000;
app.listen(port,()=>{

})