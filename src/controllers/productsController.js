// const { Where } = require('sequelize/types/utils');
const db = require('../database/models');
const Product = require('../database/models/Product');
const path = require('path');
const productsController = {

	index: async (req, res) => {
		try {
			let data = await db.Product.findAll()
			var randomList = [];
			var index = 0;
			var randomIndex=Math.floor(Math.random() * data.length)
			do {

				randomIndex = Math.floor(Math.random() * 15)
				if (!randomList.includes(randomIndex)) {
					randomList[index] = randomIndex;
					index++
				}
			} while (index < 12);
			console.log(randomList)

			res.render('index', {products:data, listado: randomList})
		}
		catch (error) {
			res.send(error)
		}
	},

	detail: async (req, res) => {
		let guardar = null;
		let data = null;
		guardar = await db.Product.findAll()
		data = await db.Product.findByPk(req.params.id)
		if (data == null) res.status(404).send('La página a la que intenta acceder es inexistente');
		res.render('detail', { product: data, allProducts: guardar })
	},

	create: (req, res) => {
		res.render('product-create-form')
	},

	processCreate: async (req, res) => {
		await db.Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			image: req.file.filename,
		})

		let last_id = await db.Product.findOne(
			{
				order: [['id', 'DESC']],
				attributes: ['id'],
				raw: true
			})
		res.redirect(`/products/detail/${last_id.id}`)



	},


	editProduct: async (req, res) => {

		let product_id = parseInt(req.params.id);
		let promProduct = await db.Product.findByPk(product_id);
		if (promProduct == null) res.status(404).send('La página a la que intenta acceder es inexistente');
		return res.render('edit-product', { product: promProduct })

	},

	deleteProduct: async (req, res) => {
		try {
			let product_id = req.params.id
			let promProduct = await db.Product.destroy({ where: { id: product_id } });
			res.send("Producto borrado con exito")
		} catch (error) {
			res.send("Error al eliminar el producto " + req.params.id + "/n" + error)
		}
	},

	shoppingCart: (req, res) => {
	
		const productId = req.body.productAddedId || req.query.productAddedId;
    
    // Check if the product id is valid (you may need to validate it further)
    if (!productId) {
        return res.status(400).send('Product ID is missing.');
    }

    // Here you can implement the logic for adding the product to the shopping cart
    // For example, you can store the product id in the session or database
    req.session.shoppingCart = req.session.shoppingCart || []; // Assuming you're using sessions
    req.session.shoppingCart.push(productId); // Add the product id to the shopping cart
	
    // Respond with a success message or redirect to another page
    return res.send('Product added to the shopping cart successfully!');
	},

	shoppingCartAdd: async (req, res) => {
		const productId = req.body.productAddedId || req.query.productAddedId;
    
    // Check if the product id is valid (you may need to validate it further)
    if (!productId) {
        return res.status(400).send('Product ID is missing.');
    }

    // Here you can implement the logic for adding the product to the shopping cart
    // For example, you can store the product id in the session or database
    req.session.shoppingCart = req.session.shoppingCart || []; // Assuming you're using sessions
    req.session.shoppingCart.push(productId); // Add the product id to the shopping cart
	
    // Respond with a success message or redirect to another page
    return res.send('Product added to the shopping cart successfully!', req.session.shoppingCart);

	}

};



module.exports = productsController;