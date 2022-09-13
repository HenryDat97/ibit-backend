import { PostModel } from '../models/PostModels.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log(post)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ errors: err })
    }
}

export const createPost = async (req, res) => {
    try {
        // Request body
        const newPost = req.body
        // Create post
        const post = await new PostModel(newPost)
        // Save post
        await post.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ errors: err })
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body

        const post = await new PostModel.findOneAndUpdate(
            { _id: updatePost._id },
            updatePost,
            { new: true }
        )
        
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json({ errors: err })
    }
}
