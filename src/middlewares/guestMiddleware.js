
function guestMiddleware ( req, res, next) {
    if (req.session.user != undefined) {
        res.locals.user = req.session.user
        return  res.render('userProfile', {user: req.session.user});
    }
    else {
        next()
    }
       
    
}
   

module.exports = guestMiddleware;