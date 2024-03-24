
async function  userLoggedMiddleware(req,res,next){ 
    res.locals.isLogged = false;
    res.locals.userIsAdmin = false;

    if (req.session.userLogged != undefined){
        if(req.session.userLogged.userEspecify_id == 1){
            res.locals.userIsAdmin = true;
            
        } 
      
        if (req.session && req.session.userLogged){
            res.locals.isLogged = true;
            delete res.locals.userLogged;
            res.locals.userLogged= req.session.userLogged //lo paso a la variable local
        }
    }
   

    
    next();
}
    
module.exports = userLoggedMiddleware;

