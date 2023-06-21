

const authorise = (roleArray) => {
    //roleArray contains roles that requires authorization
    return (req, res, next) => {
        let userRole = req.body.userRole

        if (roleArray.includes(userRole)) {
            next()
        }
        else {
            res.send("Not authorised")
        }
    }
}


module.exports = {
    authorise
}