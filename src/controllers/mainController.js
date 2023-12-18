
let mainController = {
    index: (req, res) => {
        res.render("index")
    },
    login: (req, res) => {
         res.render('login')
    },
    recoverPass: (req, res) => {
         res.render('recover-pass')
    },
    recoverMessage: (req, res) => {
        res.send('Su nueva contraseña ha sido enviada')
    },
    register: (req, res) => {
        res.render('register')
    },
    detail: (req, res) => {
        let id = parseInt(req.params.id);
        res.render('detail', id)
    },
    shoppingCart: (req, res) => {
        res.render('shopping-cart')
    },
    facebook: (req, res) => {
        res.redirect('https://www.facebook.com')
    },
    instagram: (req, res) => {
        res.redirect('https://www.instagram.com')
    },
    createProduct: (req, res) => {
        res.render('create-product')
    },
    editProduct: (req, res) => {
        res.render('edit-product')
    }
}

module.exports = mainController;