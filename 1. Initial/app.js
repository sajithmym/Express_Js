let express = require("express")
let path = require("path")
let app = express()


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/sajith.html"))
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/sajith.html"))
})

app.get("/log",(req,res)=>{
    res.sendFile(path.join(__dirname+"/login.html"))
})

app.listen(8086,()=>{
    console.log("Server is Started in http://127.0.0.1:8086");
})