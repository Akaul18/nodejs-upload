const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    post: String,
    createdAt: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

module.exports = model('Post', postSchema)
