// Chequea que el usuario sea admin: Si es admin lo deja seguir, sino lo manda al profile.
function adminMiddleware ( req, res, next) {
    if (req.session.userLogged.userEspecify_id == 1) {
        next();
    } else {
        res.send('El usuario no cuenta con los permisos necesarios');
    }
    
}

module.exports = adminMiddleware;