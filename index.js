const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes

app.get('/', (req, res) => {
    res.send('Hello, how are you? I am fine.');
});

app.get('/api/products', async (req, res) => {
    try {
        // Rename to avoid conflict with the imported Product model
        const createdProduct = await Product.find();
        res.status(200).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract the `id` from route parameters
        const product = await Product.findById(id); // Use the correct model name and call `findById`
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // Handle case if product does not exist
        }
        
        res.status(200).json(product); // Return the product if found
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});





app.post('/api/products', async (req, res) => {
    try {
        // Rename to avoid conflict with the imported Product model
        const createdProduct = await Product.create(req.body);
        res.status(200).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//update a product
app.put('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract id from request parameters
        const product = await Product.findByIdAndUpdate(
            id,         // The id of the product to update
            req.body,   // The updated fields from the request body
            {
                new: true,          // Return the updated document
                runValidators: true // Ensure data validation rules are applied
            }
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product); // Send the updated product
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

//delete

app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params; // Extract the product ID from the URL

        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose.connect("mongodb+srv://utkarshpbscit:hM5wnFzUPtExkrq9@backendd.lpokl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendd")
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
