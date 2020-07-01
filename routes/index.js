import express from 'express'
const router = express.Router()

router.use('/login', require('./login'))
// router.use('/data', require('./data'))

module.exports = router
