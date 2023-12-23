
let productsController = {

    detail: (req, res) => {
        let id = parseInt(req.params.id);
        res.render('detail', id)
    },

    shoppingCart: (req, res) => {
        res.render('shopping-cart')
    },

    createProduct: (req, res) => {
        res.render('create-product')
    },

    editProduct: (req, res) => {
        res.render('edit-product')
    }
};

module.exports = productsController;