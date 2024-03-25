// const { Where } = require('sequelize/types/utils');
const db  = require('../database/models');
const Product = require('../database/models/Product');
const path = require('path');
const productsController = {

	index:  (req, res) => {
		db.Product.findAll()
			.then((data)=> res.render((data)))
	},

	detail: (req, res) => {
		let guardar = []
		db.Product.findAll()
			.then((data)=> guardar = ((data)))
		db.Product.findByPk(req.params.id)
			.then((data)=>res.render('detail', {product: data, allProducts: guardar}))
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
			{order: [ [ 'id', 'DESC' ]],
			attributes: ['id'],
			raw: true
			})
		res.redirect(`/products/detail/${last_id.id}`)

		

	},


editProduct:async (req, res) => {
	
	let product_id = parseInt(req.params.id);
	let promProduct =await db.Product.findByPk(product_id);

	Promise.all([promProduct])
	.then(([Product]) => {
		return res.render(path.resolve(__dirname, '..', 'views', 'edit-product'), {product:Product})
	})
},



shoppingCart: (req,res) => {
	res.render('shopping-cart', {shoppingList: req.session.shoppingList})
},

shoppingCartAdd: async(req, res) => {
	let product_id = parseInt(req.body.productId)
	let promProduct = await db.Product.findByPk(product_id);
	console.log("shopping cart")
	req.session.shoppingList= [req.session.shoppingList, ...promProduct]
	console.log(req.session.shoppingList)

	res.render('shopping-cart', {shoppingList: req.session.shoppingList})
}

};



module.exports = productsController;