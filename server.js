const express = require('express');
const app = express();
const port = 3000;
const date = new Date();

hour = date.getHours();
day = 6;
day >= 1 && day <= 5
  ? hour > 8 && hour < 18
    ? app.get('/', (req,res) => {
    res.sendFile( __dirname + '/pages/home.html');
})
    : app.get('/', (req,res) => {
        res.send("server don't work")
  : res.send("server don't work");




app.listen(port, (err)=> 
err? console.error(err):console.log(`server running http://localhost:${port}`));
