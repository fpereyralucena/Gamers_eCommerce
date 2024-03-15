const db  = require('../database/models');
const Users = require('../database/models/User');
const path = require('path');
const bcrypt = require('bcrypt');


function validatePassword (password, hash){
    return bcrypt.compareSync(password, hash)
}

const usersController = {

    login: (req, res) => {
        res.render('login')
   },

   loginValidation: async (req, res) => {
    let usuario = req.body.usuario
    let contrasenia = req.body.passwordUsuario
    const user = await db.Users.findOne({
        where: { email: req.body.usuario}});
        Promise.all([user])
        .then(([user])=>{
            if (user === null) {
                res.send("usuario no encontrado")
            } if (validatePassword(req.body.passwordUsuario, user.password)) {
                delete user.password
                req.session.userLogged = user
                res.redirect('/users/profile');
            }
        })
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
    const user = db.Users.findOne({
        where: { email: req.body.email}});
    if (user === null) {
        res.send("usuario ya existe")
    }else{
        db.Users.create({
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userEspecify_id: [2],
        })}
        res.redirect('/users/profile');
   },

   profile: (req, res) => {
    console.log("Estas en profile");
    console.log(req.session)
    return res.render('userProfile', {user: req.session.userLogged})
   },

   logout: (req, res) => {
    delete req.session.userLogged;
    return res.redirect('../')

   }

};

module.exports = usersController;