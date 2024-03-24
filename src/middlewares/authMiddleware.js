// Se permite ingresar solo si el usuario está logueado.
function authMiddleware (req, res, next) {
    if (req.session.userLogged == undefined) {
       return res.redirect('/users/login');
    }  
    res.locals.user = req.session.userLogged;    
    next()
    }


module.exports = authMiddleware;