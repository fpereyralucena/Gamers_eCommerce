const db  = require('../database/models');
const productsController = {
	index:  (req, res) => {
		db.Product.findAll()
			.then((data)=> res.render((data)))
	},
	detail: (req, res) => {
		db.Product.findByPk(req.params.id)
			.then((data)=>res.render('detail', {product: data}))
	}
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