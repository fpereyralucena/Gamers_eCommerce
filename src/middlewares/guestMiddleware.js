
function guestMiddleware ( req, res, next) {
    if (req.session.user != undefined) {
        res.locals.user = req.session.user
        return  res.redirect('/user/profile');
    }
    else {
        next()
    }
       
    
}
   

module.exports = guestMiddleware;