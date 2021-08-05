const checkReqBody = (req, res, next) => {
    const { username, password } = req.body

    if(!username || !password) {
        res.status(400).json({ message: 'Please provide username and password.'})
    } else {
        next()
    }
}

module.exports = checkReqBody