var express = require('express');
var bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(function (req, res, next) {   

    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');  
    res.setHeader('Access-Control-Allow-Credentials', true);   

    next();
})
app.listen(8083,(req,res)=>{
    console.log("server listening at 8083");
});
app.get("/data",(req,res)=>{
    res.send([
        {name:"Arun",sal:80000},
        {name:"Ram",sal:90000}
    ])
})