// Chequea que el usuario sea admin: Si es admin lo deja seguir, sino lo manda al profile.
function adminMiddleware ( req, res, next) {
    if (req.session.user.userEspecify_id == 1) {
        res.locals.user = req.session.user;
        next();
    }
      return  res.send('El usuario no cuenta con los permisos necesarios');
    }
    

module.exports = adminMiddleware;