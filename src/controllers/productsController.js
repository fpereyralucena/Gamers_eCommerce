// const { Where } = require('sequelize/types/utils');
const db  = require('../database/models');
const Product = require('../database/models/Product');
const path = require('path');
const productsController = {

	index:  (req, res) => {
		db.Product.findAll()
			.then((data)=> res.render((data)))
	},

	detail: async(req, res) => {
		let guardar = null;
		let data = null;
		guardar = await db.Product.findAll()
		data = await db.Product.findByPk(req.params.id)
		if (data == null) res.sendStatus(404);
		res.render('detail', {product: data, allProducts: guardar})
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
	if (promProduct == null) return res.sendStatus(404);
	return res.render( 'edit-product', {product:promProduct})
	
},

deleteProduct: async(req, res) => {
	try {
		let product_id = req.params.id
		let promProduct =await db.Product.destroy({ where: {id: product_id}});
		res.send("Producto borrado con exito")
	} catch (error) {
		res.send("Error al eliminar el producto "+req.params.id + "/n" + error)
	}
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