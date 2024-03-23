// Chequea que el usuario sea un invitado: Si no está logueado deja seguir. Si está logueado redirije al perfil.
function guestMiddleware ( req, res, next) {
    if (req.session.userLogged == undefined) {
        next()
    } else {
        res.redirect('/users/profile');
    }
   
}

module.exports = guestMiddleware;