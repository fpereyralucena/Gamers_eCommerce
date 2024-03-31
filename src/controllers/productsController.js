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
			var randomIndex = Math.floor(Math.random() * data.length)
			do {

				randomIndex = Math.floor(Math.random() * 15)
				if (!randomList.includes(randomIndex)) {
					randomList[index] = randomIndex;
					index++
				}
			} while (index < 12);
			console.log(randomList)

			res.render('index', { products: data, listado: randomList })
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
		if (data == null) res.render("error404");
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
		if (promProduct == null) res.status(404).render('error404');
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
		res.render('shopping-cart', { shoppingList: req.session.shoppingList })
	},

	shoppingCartAdd: async (req, res) => {
		let product_id = parseInt(req.params.id)
		let promProduct = await db.Product.findByPk(product_id, { raw: true });
		let productsInCart = [];
		if (req.session.shoppingList && req.session.shoppingList.length > 0) {
			productsInCart.push(req.session.shoppingList)
			
		} 
		productsInCart.push(promProduct);
		console.log(productsInCart)
		req.session.shoppingList.push(promProduct)
		res.render('shopping-cart', { shoppingList: req.session.shoppingList })
	},

	productList: async (req, res) => {
		let productList = await db.Product.findAll({ raw: true });
		res.render('product-list', { productList });
	}

};


module.exports = productsController;