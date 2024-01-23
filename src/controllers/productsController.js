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
			name: req.body.title,
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
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product_id = parseInt(req.params.id);
		let product = products.find((element) => element.id === product_id);
		if (product) {res.render('edit-product', {product})}
		if (!product) {res.send('producto no encontrado')}
    },
	processEditProduct: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = parseInt(req.params.id);
		let index = products.findIndex((product) => product.id === id);
		let productToEdit = {};
		// eslint-disable-next-line no-undef
		for (field in products[index]) {
			productToEdit.field = parseFloat(req.body.field) || req.body.field;
		}
		products.forEach(product => {
			if (product.id === id) {
				product.title = req.body.title || product.price;
				product.price = parseInt(req.body.price) || product.price;
				product.discount = parseInt(req.body.discount) || product.discount;
				product.category = req.body.category || product.category;
				product.description = req.body.description || product.description;
				product.image = req.file ? req.file.filename : product.image;
			}
	
		});


		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.send("Producto Editado");
	}

};

module.exports = productsController;