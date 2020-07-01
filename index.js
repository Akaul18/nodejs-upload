require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import mongoose from 'mongoose'

const app = express()

const PORT = process.env.PORT || 5600

app.use(cors())
app.use(json({ urlencoded: false }))

app.use(express.static('public'))

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('🚀 connected to mongodb')
    })
    .catch((err) => {
        console.error(err)
    })

app.use('/api', require('./routes'))

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    res.status(404).send('Unknown request')
    next()
})

app.listen(PORT, () => console.log('Server running on ' + PORT))
