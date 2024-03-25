const db = require('../database/models');
const Users = require('../database/models/User');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
let errors = [];

function validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

const usersController = {

    login: (req, res) => {
        res.render('login', { errors })
    },

    loginValidation: async (req, res) => {
        let usuario = req.body.usuario
        let contrasenia = req.body.passwordUsuario;

        const user = await db.Users.findOne({
            where: { email: req.body.usuario }
        });


        if (user === null) {
            return res.render('login', { errors: [{ msg: "Usuario No encontrado" }] })
        }
        if (validatePassword(req.body.passwordUsuario, user.password)) {
            delete user.dataValues.password
            req.session.userLogged = user.dataValues;
            /* console.log("req.session.userLogged", req.session.userLogged) */
            return res.render('userProfile', { user: req.session.userLogged });
        }
        else {
            return res.render('login', { errors: [{ msg: "Contraseña inválida" }] })
        }

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

        function checkPasswords() {
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
            res.render('register', { errors, oldData })
        }
        else {
            let user = await db.Users.create({
                firstName: req.body.first_name,
                lastName: req.body.last_name,
                // bday: req.body.bday,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                userEspecify_id: 2,
                image: req.body.imagen
            }, 
            )

            user = JSON.parse(JSON.stringify(user));
            console.log(user);
            req.session.user = user;
            
            res.redirect('/users/profile')
        }


        ;
    },

    profile: (req, res) => {
       let user = req.flash('user')
       console.log("user.firstname es :", user)
       console.log("req.locals.user es:" , req.locals)
        res.render('userProfile', { user: req.flash('user')})
    },



    logout: (req, res) => {
        req.session.destroy();
        res.redirect('../')

    }

};

module.exports = usersController;