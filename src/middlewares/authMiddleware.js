// Se permite ingresar solo si el usuario está logueado.
function authMiddleware (req, res, next) {
    if (req.session && req.session.user) {
        next()
    }else res.redirect('/login')
    }     
    
    


module.exports = authMiddleware;