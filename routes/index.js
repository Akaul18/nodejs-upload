const express = require('express')
const router = express.Router()

router.use('/register', require('./register'))
router.use('/login', require('./login'))
router.use('/post', require('./post'))

module.exports = router
