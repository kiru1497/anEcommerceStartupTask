const { postProducts } = require("./productController");

const getUsers = (req,res)=>{
    res.send("Fetching all users");
}; 

const postUser = (req,res)=>{
    res.send("Adding a new user"); 
}; 

const getUserById = (req,res)=>{
     res.send(`Fetching user with id: ${req.params.id}`);
}

module.exports ={
    getUsers,
    postUser,
    getUserById
}