let express = require("express")
let ejs = require("ejs")
let BodyParser = require("body-parser")
let app = express()

app.set("view engine","ejs")
app.use(BodyParser.urlencoded({entended:true}))

app.get("/",(req,res)=>{
    res.render("sajith")
})



app.get("/form",(req,res)=>{
    res.render("Form")
})

app.post()



let user_name = "SaJiTh"
let names = ["sajith","pakistan","chicago","Balangoda","Srilanka"]
app.get("/log",(req,res)=>{
    res.render("login",{user : user_name, choose : names})
})

app.listen(8086,()=>{
    console.log("Server is Started in http://127.0.0.1:8086");
})