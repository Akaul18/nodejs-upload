require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(400).send({ msg: 'no authorization header' })
    }

    try {
        const token = authHeader.split(' ')[1]
        if (!token || token === undefined) {
            res.status(402).send({ msg: 'unauthorized' })
        }
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        if (!verifiedToken) {
            res.status(401).send('invalid signature')
        } else {
            req.userid = verifiedToken.id
            next()
        }
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = auth
