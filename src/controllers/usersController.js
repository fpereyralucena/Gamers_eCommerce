const db = require('../database/models');
const Users = require('../database/models/User');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


function validatePassword(password, hash) {
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
            where: { email: req.body.usuario }
        });
        Promise.all([user])
            .then(([user]) => {
                if (user === null) {
                    res.send("usuario no encontrado")
                } if (validatePassword(req.body.passwordUsuario, user.password)) {
                    delete user.password
                    req.session.user = user;
                    req.session.isLoggedIn = true;
                    res.render('userProfile', { user: user });
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

    processRegistration: async (req, res) => {
        const resultValidation = validationResult(req);
        let oldData = req.body
        
        
        
        function checkPasswords () {
            if (req.body.password !== req.body.password2) 
            return "Las contraseñas no coinciden"
            else return null
        }

        let passwordMissmatch = checkPasswords()
              
        
        if (resultValidation.errors.length > 0 || passwordMissmatch) {
            return res.render('register', {
                errors: resultValidation.mapped(), oldData, passwordMissmatch
            })
        }
        
        let user = await db.Users.findOne({
            where: { email: req.body.email }
        });
        if (user) {
            let errors = {
                email: {
                    msg: "El correo ya habia sido registrado anteriormente"
                }
            }
            return res.render('register', { errors , oldData })
        }
        else {
             user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                bday: req.body.bday,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                userEspecify_id: [2],
            }

            await db.Users.create({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                // bday: req.body.bday,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                userEspecify_id: [2],
            })
        }
        
        if (user) {
            res.render('userProfile', { user: user })
        }
        
        ;
    },

    profile: (req, res) => {
        if (req.session.length > 0) {
            console.log("Estas en profile");
            console.log(req.session)
        }
        return res.render('userProfile', { user: req.session.userLogged })
    },

    logout: (req, res) => {
        delete req.session.userLogged;
        return res.redirect('../')

    }

};

module.exports = usersController;