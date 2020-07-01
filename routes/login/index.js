require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../../models/user')

router.post('/', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await User.findOne({ username, password })
    // const foundUser = await User.findOne({
    //     username: username,
    //     password: password,
    // })
    console.log(user)
    res.send(user)
    // if (!user) {
    //     res.status(401).send('unauthorized username')
    // } else {
    //     if (user.password !== password) {
    //         res.status(401).send('unauthorized password')
    //     } else {
    //         const token = jwt.sign(
    //             { user: username },
    //             process.env.TOKEN_SECRET,
    //             {
    //                 expiresIn: '5h',
    //             }
    //         )
    //         res.status(200).json({ token })
    //     }
    // }
})
module.exports = router
