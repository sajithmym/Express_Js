let list = [
    { First_Name: "Mohamed", Last_Name: "Sajith", Age: 22 },
    { First_Name: "Mohamed", Last_Name: "Saj", Age: 22 },
    { First_Name: "Mohamed", Last_Name: "Saji", Age: 22 },
    { First_Name: "Mohamed", Last_Name: "Sajith_cool", Age: 22 },
]

let express = require("express")
let ejs = require("ejs")
let mongoDB = require("mongoose")

//Connect MongoDB   *mongoDB.set("useCreateIndex", "true")*
mongoDB.connect("mongodb://localhost:27017/Try", { useNewUrlParser: true })

let schema_for_DB_saj = new mongoDB.Schema({
    First_Name: String,
    Last_Name: String,
    Age: Number
})

let The_Collection = mongoDB.model("new_collections", schema_for_DB_saj)

list.forEach((icc) => {
    The_Collection.create(icc, (err, rec) => {
        if (err)
            console.log("Error Found.. .");
        else
            console.log(rec);
    })
})


app = express()
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("sajith")
})

app.listen(8056, () => {
    console.log("Server is Started in http://127.0.0.1:8056");
})
