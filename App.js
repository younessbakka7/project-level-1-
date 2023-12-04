const express = require ("express");
const app = express();
const port = 3000;

const mongoose = require ("mongoose");

app.use(express.urlencoded({extended:true}))

const Mydata  = require("./modules/dataSchema")


app.get('/',(req,res)=>{
    res.sendFile("./views/Home.html", {root : __dirname})

})


mongoose.connect("mongodb+srv://younessbenbakka14:2fKC14XueIPK5A1R@cluster0.u4jjohs.mongodb.net/all-data?retryWrites=true&w=majority").then(()=>{
    app.listen(port, ()=>{
        console.log(`{http://localhost:3000/}`)
    })

}).catch((err)=>{
    console.log(err)
})



app.post('/',(req,res)=>{
    const mydata = new Mydata(req.body);
    mydata.save().then(()=>{
        res.redirect("/index.html")
    }).catch((err)=>{
        console.log(err)
    })
  

})


       
   



