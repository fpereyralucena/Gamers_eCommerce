
let usersController = {

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
   }

};

module.exports = usersController;