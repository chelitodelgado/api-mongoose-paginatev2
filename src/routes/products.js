const { Router } = require('express');
const  router = Router();

const Product = require('../model/Product')

router.get('/products', async (req, res) => {
    const limit  = parseInt( req.query.limit || 10 );
    const page  = parseInt( req.query.page || 1 );
    const products = await Product.paginate({},{ limit, page });
    res.json(products);
})

router.post('/products', async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    const productSave = await newProduct.save();
    res.send(productSave);
})

module.exports = router;