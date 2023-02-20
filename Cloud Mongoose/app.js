let mongoDB = require("mongoose")
let Express = require("express");
const router = require("./routes/product_route");

//Connect MongoDB   *mongoDB.set("useCreateIndex", "true")*
mongoDB.connect("mongodb+srv://sajith:asdQWE123@cluster0.exwgg9r.mongodb.net/shop?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology : true
}).then(()=>{
    console.log("DataBase Connected.");
}).catch((e)=>{
    console.log(e);
})

const app = Express()
app.use("/products",router)

app.listen(8520,()=>{
    console.log("Server is Started in http://127.0.0.1:8520");
})