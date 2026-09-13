const express = require('express');
const app = express();
const PORT = 3000;

//Middleware parse in JSON bodies
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server running on ${PORT}`);
});

//In-memory storage
let products = [
    {id: 1, name:'Pen', price: 200},
    {id: 2, name:'Notebook', price: 500}
];

//Generates new IDs
let currentId = 3;

//CREATE Product ID
app.post('/products', (req,res) => {
    const {name, price} = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({message: 'name and price are required'});
    }
    const newProduct = {id: currentId++, name, price};
    products.push(newProduct);
    res.status(201).json(newProduct);
});

//GET All Products
app.get('/products', (req, res) => {
    res.json(products);
});

//GET Products
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(400).json({message: 'Product not found'});
    };
    res.json(product);
});

//UPDATE Products
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const {name, price} = req.body;
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({message: 'Product not found'});
    }
    products[productIndex] = {
        ...products[productIndex],
        name: name || products[productIndex].name,
        price: price || products[productIndex].price
    };
    res.json(products[productIndex]);
})

//DELETE Product
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(400).json({message: 'Product not found'});
    }
    const deletedProduct = products.splice(productIndex, 1);
    res.json({message: 'Product successfully deleted', deletedProduct});
});
