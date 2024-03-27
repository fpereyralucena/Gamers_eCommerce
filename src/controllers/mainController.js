const db = require('../database/models')

let mainController = {

    index: (req, res) => {
        db.Product.findAll()
            .then((data)=>res.render("index", {products: data}))
    },
    
    facebook: (req, res) => {
        res.redirect('https://www.facebook.com')
    },

    instagram: (req, res) => {
        res.redirect('https://www.instagram.com')
    },

    terms: (req, res) => {
        res.render('terms-and-conditions');
    }
    
};

module.exports = mainController;