let express = require("express")
let ejs = require("ejs")
let mongoDB = require("mongoose")

//Connect MongoDB   *mongoDB.set("useCreateIndex", "true")*
mongoDB.connect("mongodb://localhost:27017/saj", { useNewUrlParser: true })

let schema_for_DB_saj = new mongoDB.Schema({
    First_Name: String,
    Last_Name: String,
    Age: Number
})

let The_Collection = mongoDB.model("new_collections", schema_for_DB_saj)

app = express()
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    The_Collection.find({}, (er, doc) => {
        if (er)
            console.log(er)
        else {
            res.render("For_app", { All: doc })
        }
    });
})

app.listen(8056, () => {
    console.log("Server is Started in http://127.0.0.1:8056");
})
