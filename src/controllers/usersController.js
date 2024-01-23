const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');

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
   },

   processRegistration: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    console.log(req.body)
    const newUser = 
        {id: users[users.length -1].id + 1,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: req.body.password, //HASHED PASSWORD MISSING
        roles: ["customer"], // SECURITY PROBLEM: DIFFERENT NOT ACCESIBLE FILE SHOULD BE REQUIRED
        profileImage:  'default-Image.jpg'}

    users.push(newUser);
    
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.send("Usuario Creado Correctamente");
   }

};

module.exports = usersController;