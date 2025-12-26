const getProducts = (req,res)=>{
    res.send("Fetching all products"); 
};

const postProducts = (req,res)=>{
     res.send("Adding a new product.");
};

const getProductsById = (req,res)=>{
     res.send(`Fetching product with id: ${req.params.id}`);
}; 

module.exports = {
    getProducts,
    postProducts,
    getProductsById
}