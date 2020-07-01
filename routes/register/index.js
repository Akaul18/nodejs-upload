require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/user')

router.post('/', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const existingUser = await User.findOne({ username })
    if (existingUser) {
        res.status(400).send('username already taken')
    } else {
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({
            username,
            password: hashedPassword,
        })
        const user = await newUser.save()
        const token = jwt.sign(
            { id: user._id, username },
            process.env.TOKEN_SECRET,
            { expiresIn: '1h' }
        )
        res.send({ token })
    }
})

module.exports = router
