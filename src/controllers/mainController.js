const db = require('../database/models')
let mainController = {

    index: (req, res) => {
        db.Products.findAll()
            .then((data)=>res.render("index", {products: data}))
        res.render("index")
    },
    
    
    facebook: (req, res) => {
        res.redirect('https://www.facebook.com')
    },

    instagram: (req, res) => {
        res.redirect('https://www.instagram.com')
    }
    
};

module.exports = mainController;