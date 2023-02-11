let express = require("express")
let ejs = require("ejs")
let mongoDB = require("mongoose")

app = express()
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("sajith")
})

app.listen(8056,()=>{
    console.log("Server is Started in http://127.0.0.1:8056");
})
