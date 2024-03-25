const db = require('../database/models');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
let errors = [];

function validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash)
}

const usersController = {

    login: (req, res) => {
        if (req.session.user != undefined) req.session.destroy();
        res.render('login', { errors })
    },

    loginValidation: async (req, res) => {

        let user = await db.Users.findOne({
            where: { email: req.body.email }
        });

        if (user === null) {
            return res.render('login', { errors: [{ msg: "Usuario No encontrado" }] })
        }
        if (validatePassword(req.body.passwordUsuario, user.password)) {
            delete user.dataValues.password
            user = JSON.parse(JSON.stringify(user));
            req.session.user = user;
            return res.render('userProfile', {user});
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
        req.session.destroy;
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
            req.session.user = user;
            res.redirect('/users/profile')
        }
    },

    profile: (req, res) => {
        
        res.render('userProfile', { user: req.session.user })
    },



    logout: (req, res) => {
        req.session.user = {};
        delete req.session.user;
        res.redirect('/')
   }

};

module.exports = usersController;