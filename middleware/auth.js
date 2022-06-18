export default (req, res, next) => {
    if(!req.session.loggedIn) {
        res.sendStatus(401)
        return
    }

    next()
}