const express = require('express')
const router = express.Router()

const auth = require('../../util/auth')
const Post = require('../../models/post')

router.get('/', auth, async (req, res) => {
    if (!req.userid) {
        res.status(401).send('unauthorized route')
    } else {
        const allPosts = await Post.find().sort({ createdAt: -1 })
        if (!allPosts) {
            res.status(200).status({ msg: 'No posts yet' })
        }
        console.log(allPosts)
        res.status(200).json(allPosts)
    }
})

router.post('/', auth, async (req, res) => {
    if (!req.userid) {
        res.status(401).send('unauthorized route')
    } else {
        const postBody = req.body.post
        const newPost = new Post({
            post: postBody,
            createdAt: new Date().toISOString(),
            creator: req.userid,
        })
        const post = await newPost.save()
        res.status(200).send({ msg: 'saved successfully' })
    }
})

module.exports = router
