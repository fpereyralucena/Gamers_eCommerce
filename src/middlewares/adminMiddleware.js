// Chequea que el usuario sea admin: Si es admin lo deja seguir, sino lo manda al profile.
function adminMiddleware ( req, res, next) {
    if (req.session.userLogged == 1) {
        next();
    }
      return  res.send('El usuario no cuenta con los permisos necesarios');
    }
    

module.exports = adminMiddleware;