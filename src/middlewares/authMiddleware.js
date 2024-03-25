// Se permite ingresar solo si el usuario está logueado.
function authMiddleware (req, res, next) {
    if (req.session && req.session.user) {
        res.redirect('/users/profile')
    }else next()
    }     
    
    


module.exports = authMiddleware;