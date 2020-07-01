require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

router.post('/', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await User.findOne({ username })

    if (!user) {
        res.status(401).send('unauthorized credential')
    } else {
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            res.status(401).send('unauthorized credentials')
        } else {
            const token = jwt.sign(
                { id: user._id, username },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '1h',
                }
            )
            res.status(200).send({ token })
        }
    }
})
module.exports = router
