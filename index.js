const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const sanitize = require('sanitize');
const startDb = require('./db')

const app = express()

const PORT = process.env.PORT || 5600

app.use(cors())
app.use(bodyParser.json({ urlencoded: false }))
app.use(require('sanitize').middleware)

app.use(express.static('public'))

app.use('/api', require('./routes'))

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    res.status(404).send('Unknown request')
    next()
})

startDb().once('open', () => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
})
