require('dotenv').config()
const mongoose = require('mongoose')

const startDb = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            keepAlive: 1,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('🚀 connected to mongodb')
        })
    return mongoose.connection
        .on('error', console.error)
        .on('disconnected', startDb)
}

module.exports = startDb
