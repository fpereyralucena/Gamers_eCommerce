const db = require('../database/models')

let mainController = {

    index: (req, res) => {
        db.Product.findAll()
            .then((data)=>res.render("index", {products: data}))
    },
    
    error404:(req, res) => {
        res.render("error404")
    },

    facebook: (req, res) => {
        res.redirect('https://www.facebook.com')
    },

    instagram: (req, res) => {
        res.redirect('https://www.instagram.com')
    }
    
};

module.exports = mainController;