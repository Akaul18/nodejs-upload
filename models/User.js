import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

export default mongoose.model('user', userSchema)
