const db = require('../../database/models');

const productsApiController = {
    AllProducts: async (req, res) => {
        let product = await db.Product.findAll({raw:true});
        if (!product) return res.sendStatus(204);
        product = product.map((obj=>({...obj, detail: req.protocol + "://" + req.get("host") + req.originalUrl + "/" + obj.id})));
        if(product) return res.json((product));
    },

    oneProduct: async (req, res) => {
        let product_id = req.params.id;
        let product = await db.Product.findByPk(product_id)
        if (!product) return res.sendStatus(204);
        if (product) return res.json((product))
    }
}

module.exports = productsApiController