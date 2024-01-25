const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usuarios.json');
const bcrypt = require('bcrypt');


function validatePassword (password, hash){
    return bcrypt.compareSync(password, hash)
}

let usersController = {

    login: (req, res) => {
        res.render('login')
   },

   loginValidation: (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    let user = users.find(register => register.email == req.body.usuario)
    if (!user){res.send("usuario no encontrado")}
    if (validatePassword(req.body.passwordUsuario, user.password)){
        delete user.password;
        res.session.userLogged = user;
        return res.render('userProfile', {user: req.session.userLogged})

    }
    else {res.send("password no coincide")}
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
    const newUser = 
        {id: users[users.length -1].id + 1,
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        roles: ["customer"], // SECURITY PROBLEM: DIFFERENT NOT ACCESIBLE FILE SHOULD BE REQUIRED
        profileImage:  req.body.image ? req.body.image : 'default-Image.jpg'}
    
    if (users.find(register => register.email == newUser.email )){
        return res.send("Ese email ya se encuentra registrado")
    }
    
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
       return res.send("Usuario Creado Correctamente");
    
   },

   profile: (req, res) => {
    return res.render('userProfile', {user: req.session.userLogged})
   }

};

module.exports = usersController;