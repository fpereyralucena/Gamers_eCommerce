function userLoggedMiddleware(req, res, next) {
    res.locals.userIsLogged = false 
    res.locals.userIsAdmin = false

    if (req.session.userLogged && req.session.userLogged.userEspecify_id == [2]) {
            console.log("userLoggedMiddleware");
            console.log("El usuario es de tipo: ",req.session.userType);

            res.locals.userIsLogged = true; 
            res.locals.userLogged = req.session.userLogged;
    }else if (req.session.userLogged && req.session.userLogged.userEspecify_id == [1]){
            console.log("userLoggedMiddleware");
            console.log(req.session.userLogged);

            res.locals.userIsLogged = true;
            res.locals.userIsAdmin = true,

            res.locals.userLogged = req.session.userLogged;
    }

    next()

}

module.exports = userLoggedMiddleware;