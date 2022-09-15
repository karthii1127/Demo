const express = require('express');
const parser = require("body-parser");
const app = express();
// app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
    // res.send("Hello world i am karthik");
})
app.post('/',(req, res)=>{
    console.log("Output");
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    res.write("Hello");
    res.send("Your Bmi is "+(weight/(height*height)));
    // console.log(Number(req.body.height) +Number(req.body.weight));
    // res.send("Value "+ (Number(req.body.height) +Number(req.body.weight)))
})
 var port = 3000;

app.listen(port,()=>{
    console.log("Listening in Port "+port);
})