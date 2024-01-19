const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');

let productsController = {

    detail: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product_id = parseInt(req.params.id);
		let product = products.find((element) => element.id === product_id);
		if (product) {res.render('detail', {product})}
		if (!product) {res.send('producto no encontrado')}
		
		
	},

    shoppingCart: (req, res) => {
        res.render('shopping-cart')
    },

    create: (req, res) => {
		
		res.render('product-create-form')
    },

	processCreate: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		console.log(req.body)
		const newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file.filename}

		products.push(newProduct);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.send("Producto Creado Correctamente");
			

	},

    editProduct: (req, res) => {
        res.render('edit-product')
    }
};

module.exports = productsController;