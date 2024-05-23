const express = require('express') ;
const app = express() ;
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended : true})) ;
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine" , "ejs")
app.get("/",(req,res)=>{
    fs.readdir("./files",(err,files)=>{
        // console.log(files)
        res.render("index",{files : files});
    })
})

app.post("/create",(req,res)=>{
     fs.writeFile(`./files/${req.body.name.split(' ').join('')}.txt`,`${req.body.details}`,(err)=>{
        // console.log(req.body.details)
        res.redirect("/")
     })
})

app.listen(3000);