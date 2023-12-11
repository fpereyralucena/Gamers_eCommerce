
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
    }
}

module.exports = mainController;