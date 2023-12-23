
let mainController = {

    index: (req, res) => {
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