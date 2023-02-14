let mongoDB = require("mongoose")

mongoDB.connect("mongodb://localhost:27017/saj", { useNewUrlParser: true })

let schema_for_DB_saj = new mongoDB.Schema({
    First_Name: String,
    Last_Name: String,
    Age: Number
})

let The_Collection = mongoDB.model("new_collections", schema_for_DB_saj)

The_Collection.findByIdAndDelete("63ea8153c0cbcde794370ae4",(e)=>{
    if (e)
        console.log("Error");
    else
        console.log("SuccessFul...");
})