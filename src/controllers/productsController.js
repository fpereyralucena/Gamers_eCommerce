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

	processCreate: (req, res) => {
		db.Product.create({
        //let products = db.Product.findAll()
		//	.then((data)=> (data));

		//console.log(products)
			
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			image: req.file.filename,
			})
		.then(() => {
		return res.send("Producto creado con exito!!!");
	})
	.catch(error => res.send(error))

	},


editProduct: (req, res) => {
	
	let product_id = parseInt(req.params.id);
	let promProduct = db.Product.findByPk(product_id);

	Promise.all([promProduct])
	.then(([Product]) => {
		return res.render(path.resolve(__dirname, '..', 'views', 'edit-product'), {product:Product})
	})
},

shoppingCart: (req, res) => {
	res.render('shopping-cart')
},

};



	// findByPk: (req, res) => {
	// 	const {id} = req.params;
	// 	db.Products.findByPk(id)
	// 		.then((product)=>{return res.json({data: id, product})})
	// 		.catch((err) => {console.log(err)});
	// },
	// findOne: async (req, res) => {
	// 	try {
	// 		const {id} = req.params;
	// 		const products = await db.Products.findOne({where: {id:id}})
	// 		res.json({products})
	// 	}
	// 	catch (error){res.send(error)}
	// }


module.exports = productsController;