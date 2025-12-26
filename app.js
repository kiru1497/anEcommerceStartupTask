const express = require("express"); 
const app = express(); 
const port = 3000; 

const userRoutes = require("./routes/users"); 
const productRoutes = require("./routes/products"); 
const cartRoutes = require("./routes/cart"); 

app.use(express.json());

app.use("/users", userRoutes); 
app.use("/products", productRoutes); 
app.use("/cart",cartRoutes); 



app.listen(port,()=>{
    console.log("server is running."); 
})