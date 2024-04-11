const db = require('../../database/models');
const path = require('path')

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
    },

    lastProduct: async(req, res) => {
        
        let product = await db.Product.findOne(
            {
                order: [['id', 'DESC']],
            });
        if (!product) return res.sendStatus(204);
        if (product) {
            product['image'] = path.join(__dirname, '../../../public/img/uploads/' + product.image)
            return res.json((product))}
        return res.json(("product"))
    }
}

module.exports = productsApiController